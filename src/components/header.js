import React from 'react'
import "./header.css"


const Header1 = () =>{
    return (
        <div style={{backgroundColor : "yellow",
                     border: "2px solid red"}}>header1</div>
    );
}

const Header2 = () => {
    const headerStyle = {backgroundColor : "green"};
  return (
    <nav style={headerStyle}>Header2</nav>
  )
}
const Main = () => {
    return (
        <div>Hello Anmol Priyam</div>
    );
}

export {Header1 ,Header2};
export default Main;