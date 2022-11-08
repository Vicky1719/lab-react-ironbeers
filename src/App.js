import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './componentes/Home'
import ListBeers from './componentes/ListBeers';
import SingleBeer from './componentes/SingleBeer';
import RandomBeer from './componentes/RandomBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers/>}/>
        <Route path="/beers/:beerId" element={<SingleBeer/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
      </Routes>

    </div>
  );
}

export default App;
