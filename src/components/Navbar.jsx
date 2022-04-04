import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const { language, supportedLanguages, setLanguage } = useLanguage()

  return (
    <nav className={`navbar navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">React Context {language}</span>
      </div>

      <button onClick={toggleTheme}>{theme}</button>

      {supportedLanguages.map((language) => (
        <button key={language} onClick={() => setLanguage(language)}>{language}</button>
      ))}
    </nav>
  );
};

export default Navbar
