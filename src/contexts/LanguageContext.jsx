import React, { useCallback, useContext, useMemo, useState } from 'react'

const LANGUAGE = 'language'

const LanguageContext = React.createContext()

export const useLanguage = () => useContext(LanguageContext)

const supportedLanguages = ['es', 'en']

const validateLanguage = (language) => supportedLanguages
  .includes(language) ? language : 'en'

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    validateLanguage(localStorage.getItem(LANGUAGE)) || 'en'
  )
  
  const changeLanguage = useCallback((language) => {
    setLanguage(language)
    localStorage.setItem(LANGUAGE, language)
  }, [])

  const value = useMemo(() => ({
    language,
    supportedLanguages,
    setLanguage: changeLanguage
  }), [language, changeLanguage])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext