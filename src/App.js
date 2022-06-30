import React, {useState} from 'react'
import './index.css'
const App = () => {

  const[count, setCount] = useState(0)
  const[dark, setDark] = useState(false)

//create decrement() function


const decrement = () => {
  setCount(count -1)
}

const increment = () => {
  setCount(count +1)
}

const toggleDark = () => {
setDark(!dark)
}

const blockStyles = {
  background: dark ? 'black':'white',
  width: '120px',
  height: '120px',
  position: 'absolute',
  top: '20%',
  left: '5%',
  transform: 'translate(-50%, -50%)',
  color: dark ? 'white' : 'black',
  fontFamily: "sans-serif",
  display: 'grid',
  placeItems:'center'
}

return(
 <div className='App'>
  <button onClick = {decrement}>Minus 1</button>
  <button onClick = {increment}>Add 1</button>
  <button onClick = {toggleDark}>Toggle Dark</button>
  <br/>
  <span>Dark mode is {dark ? 'ON' : 'OFF'}</span>
  <div style = {blockStyles}>Count is at {count}</div>


  </div>
)

}

//test for git 






export default App;
