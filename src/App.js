import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemsTitle from './components/ItemsTitle/ItemsTitle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ItemsTitle greeting="Estos son nuestros productos"/>
    </div>
  );
}

export default App;
