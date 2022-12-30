import Color from './Components/Color';
import './App.css';
import {useState} from 'react';

function App() {

  const [color, setColor] = useState('white');

  const listOfColors = [
    {
      color: 'red',
      changeColor: setColor
    },
    {
      color: 'blue',
      changeColor: setColor
    },
    {
      color: 'orange',
      changeColor: setColor
    },
    {
      color: 'pink',
      changeColor: setColor
    },
    {
      color: 'cyan',
      changeColor: setColor
    },
  ]

  return (
    <div className="App" style={{display:'flex', backgroundColor: color, flexWrap: 'wrap'}}>
      {
        listOfColors.map((c) => {
          return (
            <Color key = {c.color} color={c.color} changeColor = {c.changeColor}/>
          );
        })
      }
    </div>
  );
}

export default App;
