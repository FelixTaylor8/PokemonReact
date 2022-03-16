import './App.css';
import { Nicknames } from './Nicknames';
import { Mons } from './Mons';
import { Facts } from './Facts';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Mons />} />
        <Route path='/id/:id' element={<Mons />} />
        <Route path='/:mon' element={<Mons />} />
        <Route path='nicknames/:mon' element={<Nicknames />} />
        <Route path='nicknames/id/:id' element={<Nicknames />} />
        <Route path='nicknames' element={<Nicknames />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/facts/id/:id" element={<Facts />} />
        <Route path="/facts/:mon" element={<Facts />} />
      </Routes>
    </div>
  );
}

export default App;