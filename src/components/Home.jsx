import React from 'react'

let inputValue = 0;
const changeHandler = (e) => {
    inputValue = e.target.value;
    console.log(inputValue)
}

const btnStyle = {
    padding : 20,
}

const Home = () => {
  return (
    <div>
        <input style={{padding:20 , border: "1px solid red"}} type="text" placeholder='Enter valid values'
        onClick={changeHandler}
        />
        <button style={btnStyle}>+</button>
        <button style={btnStyle}>-</button>
    </div>
  )
}

export default Home;