import i18n from 'react-native-i18n';

import en from './locales/en';
import pt from './locales/pt';

/**
 * This artifact is responsible
 * to load all translations to App
 */

i18n.fallbacks = true;

//Available Translations
i18n.translations = {
    en,
    pt
};

export default i18n;