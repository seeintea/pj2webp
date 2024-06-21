import i18n from 'i18next';
import { useCallback, useLayoutEffect, useState } from 'react';

type SupportLanguage = 'zh' | 'en';
const support: SupportLanguage[] = ['zh', 'en'];
const reflect = [
  ['zh', '简'],
  ['en', 'EN'],
];

const LOCAL_STORE_KEY = 'lang_for_2_webp';

export default function useI18next() {
  const [current, setCurrent] = useState<SupportLanguage>('en');

  useLayoutEffect(() => {
    let lang = localStorage.getItem(LOCAL_STORE_KEY) as SupportLanguage;
    if (!support?.includes(lang)) lang = 'en';
    setCurrent(lang);
    setTimeout(() => {
      i18n.changeLanguage(lang);
    }, 0);
  }, []);

  const changeLanguage = useCallback((lang: string) => {
    const value = lang as unknown as SupportLanguage;
    if (!support?.includes(value)) return;
    i18n.changeLanguage(value);
    setCurrent(() => {
      localStorage.setItem(LOCAL_STORE_KEY, value);
      return value;
    });
  }, []);

  return [reflect, current, changeLanguage] as const;
}
