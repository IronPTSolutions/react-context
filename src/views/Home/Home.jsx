import { useTheme } from "../../contexts/ThemeContext"
import useLocale from "../../hooks/useLocale"

const Home = () => {
  const { theme } = useTheme()
  const t = useLocale()


  return (
    <div className="Home">
      <h1 className={theme === 'dark' ? 'text-light' : ''}>{t('title')}</h1>

      <p>{t('currentTheme')}: {theme}</p>
      <p>{t('manolo')}</p>
    </div>
  )
}

export default Home