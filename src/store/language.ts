import { persistentAtom } from '@nanostores/persistent';
import { computed } from 'nanostores';

// Import all language content
import { content as deContent } from '../content/de';
import { content as enContent } from '../content/en';
import { content as frContent } from '../content/fr';
import { content as itContent } from '../content/it';

export type Language = 'de' | 'en' | 'fr' | 'it';

// Create a persistent atom to store the current language
export const currentLanguage = persistentAtom<Language>('language', 'de');

// Create a computed store for the content
export const content = computed(currentLanguage, (lang) => {
  switch (lang) {
    case 'de':
      return deContent;
    case 'en':
      return enContent;
    case 'fr':
      return frContent;
    case 'it':
      return itContent;
    default:
      return deContent;
  }
});

// Function to set the language
export function setLanguage(lang: Language) {
  currentLanguage.set(lang);
}