import './App.css';
import { Routes, Route } from "react-router-dom"
import Navigation from './Pages/Navigation/Navigation'
import Stations from './Pages/Stations/Stations'
import RadioMaps from './Pages/RadioMaps/RadioMaps';
import Favourites from './Pages/Favourites/Favourites';
import Player from './Pages/Player/Player';
import Search from './Pages/Search/Search';
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Search></Search>
      <Routes>
        <Route path="/" element={<Stations />} />
        <Route path="radiomaps" element={<RadioMaps />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="/player/:radioId" element={<Player />} />
      </Routes>
      <Player></Player>
    </div>
  );
}

export default App;
