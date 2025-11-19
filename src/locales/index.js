import { pt } from './pt'
import { en } from './en'
import { es } from './es'

export const translations = {
  pt,
  en,
  es,
}

export const getTranslation = (language, key) => {
  const keys = key.split('.')
  let value = translations[language] || translations.pt

  for (const k of keys) {
    value = value?.[k]
    if (value === undefined) {
      return key
    }
  }

  return value
}

