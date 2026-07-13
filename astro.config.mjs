// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The public address of the site. Used for SEO tags, the sitemap and
// canonical URLs. When the custom domain is connected this is already correct.
export default defineConfig({
  site: 'https://stjohnbiocare.com',
  integrations: [
    sitemap({
      // Keep utility/private pages (form thank-you, staff portal) out of the
      // sitemap — they carry <meta robots="noindex">, so listing them sends a
      // mixed signal.
      filter: (page) => !/\/(thank-you|staff)\/?$/.test(page),
    }),
  ],
});
