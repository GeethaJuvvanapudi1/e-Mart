import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Stores/components/pages/LandingPage';
import MobilePage from './Stores/components/pages/MobilePage';
import Computer from './Stores/components/Computer';
import ComputersPage from './Stores/components/pages/ComputersPage';
import WatchesPage from './Stores/components/pages/WatchesPage';
import MenPage from './Stores/components/pages/MenPage';
import WomenPage from './Stores/components/pages/WomenPage'
import FurniturePage from './Stores/components/pages/FurniturePage';
import ACPage from './Stores/components/pages/ACPage';
import TvPage from './Stores/components/pages/TvPage';
import RefrigeratorPage from './Stores/components/pages/RefrigeratorPage';
import BooksPage from './Stores/components/pages/BooksPage';
import KitchenPage from './Stores/components/pages/KitchenPage'
import SpeakersPage from './Stores/components/pages/SpeakersPage'
import MobileSingle from './singles/MobileSingle';
import UserCart from './Stores/userCart';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/mobiles' element={<MobilePage/>}/>
          <Route path='/Computer' element={<ComputersPage/>}/>
          <Route path='/Watches' element={<WatchesPage/>}/>
          <Route path='/Men' element={<MenPage/>}/>
          <Route path='/Woman'element={<WomenPage/>}/>
          <Route path='/Furniture'element={<FurniturePage/>}/>
          <Route path='/Ac'element={<ACPage/>}/>
          <Route path='/Kitchen'element={<KitchenPage/>}/>
          <Route path='/Tv'element={<TvPage/>}/>
          <Route path='/Speakers'element={<SpeakersPage/>}/>
          <Route path='/fridge'element={<RefrigeratorPage/>}/>
          <Route path='/Books'element={<BooksPage/>}/>
          <Route path='/Mobiles/:id'element={<MobileSingle/>}/>
          <Route path='/Cart' element={<UserCart/>}/>
          </Routes>
      </Router>
    </div>
  );
};

export default App;
