export const i18n = {
  defaultLocale: "en",
  locales: ["en", "pl"],
  prefixDefault: false,
} as const;

export type Locale = (typeof i18n)["locales"][number];
