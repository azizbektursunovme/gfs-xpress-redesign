import { ORIGIN } from '../lib/seo';

// The GitHub Pages preview is kept out of search by <meta name="robots" content="noindex"> on every page.
export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
