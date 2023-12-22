import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import Benvenuto from './components/Benvenuto';
import MyFooter from './components/MyFooter';
import ContenutoPrincipale from './components/ContenutoPrincipale';
import ContenutoPrincipale1 from './components/ContenutoPrincipale1';
import CommentsSection from './components/CommentsSection';

function App() {
return(
<div>
  <header>
    <MyNavbar />
    <Benvenuto />
    </header>
<main>
  {/* <ContenutoPrincipale /> */}
  <ContenutoPrincipale1 />
  
  
</main>
<footer>
  <MyFooter />
</footer>
</div>


)
}

export default App;
