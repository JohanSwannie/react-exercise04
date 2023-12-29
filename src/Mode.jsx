import { useState } from "react";
import AnotherMode from "./AnotherMode";

const Mode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [extraModeIsShown, setExtraModeIsShown] = useState(false);

  const handleExtraMode = () => {
    setExtraModeIsShown(true);
  };

  const handleNormalMode = () => {
    setExtraModeIsShown(false);
  };

  return (
    <div className={`page${darkMode && "dark"}`}>
      <div className="buttons">
        <button className="button-dark" onClick={() => setDarkMode(true)}>
          Dark Mode
        </button>
        <button className="button-light" onClick={() => setDarkMode(false)}>
          Light Mode
        </button>
        <button className="button-extra" onClick={handleExtraMode}>
          Extra Modes
        </button>
        <button className="button-extra" onClick={handleNormalMode}>
          Normal Modes
        </button>
        {extraModeIsShown && <AnotherMode />}
      </div>
    </div>
  );
};

export default Mode;
