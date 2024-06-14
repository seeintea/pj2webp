import i18n from 'i18next';
import { useCallback, useMemo } from 'react';

type SupportLanguage = 'zh' | 'en';

export default function useI18next() {
  const support = useMemo(() => {
    return {
      zh: 'zh',
      en: 'en',
    };
  }, []);

  const changeLanguage = useCallback((lang: SupportLanguage) => {
    i18n.changeLanguage(lang);
  }, []);

  return [support, changeLanguage];
}
