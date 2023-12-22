import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import UnderNav from './components/UnderNav';
import MyFooter from './components/MyFooter';
import MainContent from './components/MainContent';

function App() {
  return(
   <div>
     <MyNavBar />
     <UnderNav />
     <MainContent />
     <MyFooter />
   </div>
  )
}

export default App;
