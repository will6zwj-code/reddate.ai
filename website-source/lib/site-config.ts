/** Add verified release URLs here. Null keeps the current honest pre-release state. */
export const siteConfig = {
  downloads: {
    ios: null as string | null,
    android: null as string | null,
    iosLabel: 'App Store',
    androidLabel: 'Google Play',
  },
  // An HTTPS browser demo; native App packages cannot run inside a browser iframe.
  demoEmbedUrl: null as string | null,
  supportEmail: null as string | null,
};

export function releaseUrl(value: string | null): string | null {
  if (!value) return null;
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
  catch { return null; }
}
