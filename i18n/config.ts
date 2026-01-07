export type Locale = (typeof locales)[number];

export const locales = ["en", "ka", "ru"] as const;
export const defaultLocale: Locale = "en";
