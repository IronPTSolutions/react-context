import { useLanguage } from "../contexts/LanguageContext"
import en from '../locales/en.json'
import es from '../locales/es.json'

const useLocale = () => {
  const { language } = useLanguage()

  const locales = {
    es: es,
    en: en
  }

  const translateText = (key) => {
    return locales[language][key] || key
  }

  return translateText
}

export default useLocale