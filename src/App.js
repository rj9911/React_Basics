
import './App.css';
import {Header1 , Header2} from './components/header';
import Priyam from './components/header';
import Home from './components/Home'

const b =20;
function App() {

  return (
    <div>
      Hello
      <Header1 />
      <Header2 />
      <Priyam />
      <Home />
      {b}
      <button>CLick</button>
    </div>
  );
}

export default App;
