import './App.css';
import Navigation from './Pages/Navigation/Navigation'
import Stations from './Pages/Stations/Stations'
import Player from './Pages/Player/Player';
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Stations></Stations>
      <Player></Player>
    </div>
  );
}

export default App;
