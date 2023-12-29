import { useState } from "react";

const AnotherMode = () => {
  const [mode, setMode] = useState("");
  return (
    <div className={`page${mode}`}>
      <div className="buttons2">
        <button className="button-black" onClick={() => setMode("black")}>
          Black Mode
        </button>
        <button className="button-white" onClick={() => setMode("white")}>
          White Mode
        </button>
        <button className="button-yellow" onClick={() => setMode("yellow")}>
          Yellow Mode
        </button>
        <button className="button-green" onClick={() => setMode("green")}>
          Green Mode
        </button>
      </div>
    </div>
  );
};

export default AnotherMode;
