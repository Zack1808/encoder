import React, { useRef } from "react";

// Importing the style file
import "./App.css";

// Creating the App component
const App = () => {
  let handleClick = true;

  const handleSubmit = (e) => {
    if (!handleClick) return;
    handleClick = false;
    console.log(e.key);
    e.target.value = "";
    ref.current?.focus();
  };

  const ref = useRef();

  return (
    <div className="app-container">
      <form
        onKeyDown={handleSubmit}
        onKeyUp={() => (handleClick = true)}
        onClick={() => ref.current?.focus()}
      >
        <input type="text" autoFocus ref={ref} maxLength={1} />
      </form>
    </div>
  );
};

// Exporting the App component
export default App;
