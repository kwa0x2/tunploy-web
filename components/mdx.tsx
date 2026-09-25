import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import { Screenshot } from '@/components/home/screenshot';

// A panel screenshot in the docs, matching the reader's theme.
function PanelShot({ name, alt }: { name: string; alt: string }) {
  return (
    <span className="not-prose my-6 block overflow-hidden rounded-xl border shadow-sm">
      <Screenshot name={name} alt={alt} className="h-auto w-full" />
    </span>
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Step,
    Steps,
    Tab,
    Tabs,
    PanelShot,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
