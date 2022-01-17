import { useState } from "react";
import Values from "values.js";
import "./App.css";
import { Item } from "./components/Item";

function App() {
  const [color, setColor] = useState("#");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("red").all(10));

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h1>Color Generator</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className={error && "error"}
          style={{color:color}}
          type="text"
          placeholder="type color"
          value={color}
          onChange={(e) => onChangeColor(e)}
        />
        <button type="submit">Get Colors</button>
      </form>
      <div className="colors">
        {list.map((color, index) => {
          return (
            <Item key={index} {...color} index={index} hexColor={color.hex} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
