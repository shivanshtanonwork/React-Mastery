import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    setCounter((prevCounter) => {
      return prevCounter - 1;
    });
  };
  return (
    <>
      <h1>React App {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <footer>footer: {counter}</footer>
    </>
  );
}

export default App;
