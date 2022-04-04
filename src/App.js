import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useTheme } from "./contexts/ThemeContext";
import Home from "./views/Home/Home";
import "./App.css";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App bg-${theme}`}>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
