import { useState } from "react";

const Mode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`page${darkMode && "dark"}`}>
      <div className="buttons">
        <button className="button-dark" onClick={() => setDarkMode(true)}>
          Dark Mode
        </button>
        <button className="button-light" onClick={() => setDarkMode(false)}>
          Light Mode
        </button>
      </div>
    </div>
  );
};

export default Mode;
