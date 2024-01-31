import './App.css';
import { Routes, Route } from "react-router-dom"
import Navigation from './Pages/Navigation/Navigation'
import Stations from './Pages/Stations/Stations'
import RadioMaps from './Pages/RadioMaps/RadioMaps';
import Favourites from './Pages/Favourites/Favourites';
import Player from './Pages/Player/Player';
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Stations />} />
        <Route path="radiomaps" element={<RadioMaps />} />
        <Route path="favourites" element={<Favourites />} />
      </Routes>

    </div>
  );
}

export default App;
