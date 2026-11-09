import type { Copy } from './content';
import { labels } from './labels';
import traditional from './locales/zh-Hant.json';
import japanese from './locales/ja.json';
import korean from './locales/ko.json';
import vietnamese from './locales/vi.json';
import arabic from './locales/ar.json';
import punjabi from './locales/pa.json';

export const locales = [
  { code: 'en-AU', native: 'English', name: 'English · Australia', short: 'EN', dir: 'ltr' },
  { code: 'zh-Hans', native: '简体中文', name: 'Simplified Chinese', short: '简中', dir: 'ltr' },
  { code: 'zh-Hant', native: '繁體中文', name: 'Traditional Chinese', short: '繁中', dir: 'ltr' },
  { code: 'ja', native: '日本語', name: 'Japanese', short: '日本語', dir: 'ltr' },
  { code: 'ko', native: '한국어', name: 'Korean', short: '한국어', dir: 'ltr' },
  { code: 'vi', native: 'Tiếng Việt', name: 'Vietnamese', short: 'VI', dir: 'ltr' },
  { code: 'ar', native: 'العربية', name: 'Arabic', short: 'عربي', dir: 'rtl' },
  { code: 'pa', native: 'ਪੰਜਾਬੀ', name: 'Punjabi · Gurmukhi', short: 'ਪੰਜਾਬੀ', dir: 'ltr' },
] as const;
export type LocaleCode = typeof locales[number]['code'];
export const languageStorageKey = 'reddate.website.language';
const dictionaries: Partial<Record<LocaleCode, Record<string, string>>> = {
  'zh-Hant': traditional, ja: japanese, ko: korean, vi: vietnamese, ar: arabic, pa: punjabi,
};

export function resolveLocale(value: string | null | undefined): LocaleCode | undefined {
  if (typeof value !== 'string' || !value) return;
  const code = value.replace(/_/g, '-').toLowerCase();
  if (code === 'zh' || code.startsWith('zh-hans') || /^(zh-cn|zh-sg)(-|$)/.test(code)) return 'zh-Hans';
  if (code.startsWith('zh-hant') || /^(zh-tw|zh-hk|zh-mo)(-|$)/.test(code)) return 'zh-Hant';
  if (code === 'pa' || code.startsWith('pa-guru') || /^pa-in(-|$)/.test(code)) return 'pa';
  // Punjabi in Shahmukhi script is a distinct localisation; do not mislabel it.
  for (const item of locales) if (code === item.code.toLowerCase() || (['en-AU','ja','ko','vi','ar'].includes(item.code) && code.split('-')[0] === item.code.split('-')[0])) return item.code;
}

export function translate(input: Copy | string, locale: LocaleCode): string {
  const copy: Copy = typeof input === 'string' ? [input, input] : input;
  if (locale === 'en-AU') return copy[0];
  if (locale === 'zh-Hans') return labels[copy[0]] || copy[1];
  return dictionaries[locale]?.[copy[0]] || copy[0];
}

export function localisedHref(href: string | undefined, locale: LocaleCode) {
  if (!href?.startsWith('/') || href.startsWith('//')) return href;
  const url = new URL(href, 'https://reddate.invalid');
  url.searchParams.set('lang', locale);
  return `${url.pathname}${url.search}${url.hash}`;
}
