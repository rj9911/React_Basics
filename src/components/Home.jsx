import React,{useState,useEffect} from 'react'

const Home = () => {

const [inputValue , setinputValue] = useState(0);

useEffect(() => {
  console.log("Run");
},[])

console.log(inputValue);

const btnStyle = {
    padding : 20,
}

const increment = () => {
  setinputValue(inputValue + 1);
}
const decrement = () => {
   setinputValue(inputValue - 1);
}
  return (
    <div>
        <input style={{padding:20 , border: "1px solid red"}} type="text" placeholder='Enter valid values'
        value={inputValue}
        onChange={
          (e) => {
            setinputValue(e.target.value);
          }
        }
        
        />
        <button style={btnStyle} onClick={increment}>+</button>
        <button style={btnStyle} onClick={decrement}>-</button>
    </div>
  )
}

export default Home;