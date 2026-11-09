import Site from '../../components/site';
import { notFound } from 'next/navigation';
const routes = ['', 'features', 'features/overview', 'features/comfort', 'features/energy', 'features/safety', 'features/routines', 'download', 'why-reddate', 'science-and-research', 'vision', 'privacy', 'privacy-policy', 'support'];
export const dynamicParams = false;
export function generateStaticParams() {
  return routes.map(path => ({ slug: path ? path.split('/') : [] }));
}
export default async function Page({params}: {params: Promise<{slug?: string[]}>}) {
  const {slug} = await params;
  const path = (slug || []).join('/');
  if (!routes.includes(path)) notFound();
  // Static HTML starts in English. The client resolves ?lang=, saved preference,
  // and browser language without a request-time server.
  return <Site path={'/' + path} initialLocale="en-AU" />;
}
