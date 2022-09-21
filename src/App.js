import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  const handleOnAdd = () => {
    return console.log("Agregado!")
  }
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Estos son nuestros productos"/>
      <ItemCount stock={10} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
