
import './App.css';
import {Header1 , Header2} from './components/header';
import Priyam from './components/header';

const b =20;
function App() {

  return (
    <div>
      Hello
      <Header1 />
      <Header2 />
      <Priyam />
      {b}
      <button>CLick</button>
    </div>
  );
}

export default App;
