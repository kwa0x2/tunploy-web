// Pulls Tunploy's OpenAPI description and regenerates the API reference pages.
//
//   npm run api:sync                   # from the tunploy repo's main branch
//   npm run api:sync -- ../tunploy     # from a local checkout
//   npm run api:generate               # regenerate pages from openapi/tunploy.json only
import fs from 'node:fs/promises';
import path from 'node:path';
import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';

const specFile = './openapi/tunploy.json';
const upstream = 'https://raw.githubusercontent.com/kwa0x2/tunploy/main/internal/server/openapi.json';
const output = './content/docs/api/reference';

async function sync(source) {
  const raw = source
    ? await fs.readFile(path.join(source, 'internal/server/openapi.json'), 'utf8')
    : await fetch(upstream).then((res) => {
        if (!res.ok) throw new Error(`${upstream}: ${res.status}`);
        return res.text();
      });
  const doc = JSON.parse(raw);
  // The panel serves its API under its own address, which differs per install.
  doc.servers = [
    {
      url: 'https://{panel}/api/v1',
      description: 'Your Tunploy panel',
      variables: { panel: { default: 'vpn.example.com', description: 'The address you open the panel at' } },
    },
  ];
  await fs.writeFile(specFile, JSON.stringify(doc, null, 2) + '\n');
  // Also offered as a download on the API overview.
  await fs.copyFile(specFile, './public/openapi.json');
  console.log(`Wrote ${specFile} (API ${doc.info.version})`);
}

const args = process.argv.slice(2);
if (!args.includes('--generate-only')) await sync(args.find((a) => !a.startsWith('--')));

await fs.rm(output, { recursive: true, force: true });
await generateFiles({
  input: createOpenAPI({ input: [specFile] }),
  output,
  per: 'operation',
  groupBy: 'tag',
  includeDescription: true,
  meta: true,
  beforeWrite(files) {
    // The webhook delivery has no tag; file it last among the webhook endpoints.
    const rel = (f) => path.relative(output, path.resolve(output, f.path)).replaceAll('\\', '/');
    const at = (p) => files.findIndex((f) => rel(f) === p);
    const edit = (p, fn) => {
      const i = at(p);
      if (i >= 0) files[i].content = JSON.stringify(fn(JSON.parse(files[i].content)), null, 2);
    };
    const event = at('unknown/event.mdx');
    if (event >= 0) {
      files[event].path = files[event].path.replace(/unknown([\\/])event\.mdx$/, 'webhooks$1delivery.mdx');
      files.splice(at('unknown/meta.json'), 1);
      edit('webhooks/meta.json', (m) => ({ ...m, pages: [...m.pages, 'delivery'] }));
      edit('meta.json', (m) => ({ ...m, pages: m.pages.filter((p) => p !== 'unknown') }));
    }
    edit('meta.json', (m) => ({ title: 'Reference', ...m }));
  },
});
console.log(`Generated pages in ${output}`);
