
import './App.css';

function MyComponent({name,ForclassName,income="50k"}) {
 return <div className= {ForclassName}>{name} : ${income}</div>
}

function App() {
  return (
    <div>
      <MyComponent name={"Priyam"} income={"1lakh"} ForclassName="div1" />
      <MyComponent name={"Anmol"} income={"2lakh"} ForclassName="div2"/>
      <MyComponent name={"hello"} ForclassName="div2"/>
      <button>CLick</button>
    </div>
  );
}

export default App;
