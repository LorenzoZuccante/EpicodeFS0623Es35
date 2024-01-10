import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import Home from './components/Home';
import MyFooter from './components/MyFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TvShows from './components/TvShows';
import MovieDetails from './components/MovieDetails';

function App() {
  return(
    <BrowserRouter>
    <div>
     <MyNavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/TvShows' element={<TvShows/>}/>
      </Routes>
     <MyFooter />
   </div>
     </BrowserRouter>
  )
}

export default App;
