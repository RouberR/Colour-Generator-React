import { useState } from 'react';
import './App.css';
import Values from "values.js"
import { Item } from './components/Item';

function App() {
  const [color, setColor] = useState("#")
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values("red").all(10))

  const onChangeColor = (e) => {
    setColor(e.target.value)
    try{
      let colors = new Values(color).all(10)
      setList(colors)
    }catch(error){
      setError(true)
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="App">
    <h1>Color Generator</h1> 
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder='type color' value={color} onChange={(e) => onChangeColor(e)}/>
      <button type="submit">Get Colors</button>
    </form>
    <div className='colors'>
      {list.map((color, index) => {
        return (
          <Item key = {index}
         {...color} 
         index = {index}
         hexColor = {color.hex}
         
        />
        )
      
      })}
    </div>
    </div>
  );
}

export default App;
