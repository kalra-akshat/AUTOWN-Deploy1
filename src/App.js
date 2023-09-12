import './App.css';
import {
  BrowserRouter as Router,Routes,
  Route, Redirect,
} from "react-router-dom";
import MainPage from './Components/MainPage';
import ExploreADAS from './Components/ExploreADAS';
import Explorecybersec from './Components/Explorecybersec';
import Exploreev from './Components/Exploreev';
import Exploreacs from './Components/Exploreacs';
import Registeradas from './Components/Registeradas';
import Registeracs from './Components/Registeracs';
import Registercs from './Components/Registercs';
import Registerev from './Components/Registerev';
function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/exploreadas" element={<ExploreADAS/>} />
          <Route exact path="/explorecybersec" element={<Explorecybersec/>} />
          <Route exact path="/exploreev" element={<Exploreev/>} />
          <Route exact path="/exploreacs" element={<Exploreacs/>} />
          <Route exact path="/regadas" element={<Registeradas/>} />
          <Route exact path="/regacs" element={<Registeracs/>} />
          <Route exact path="/regev" element={<Registerev/>} />
          <Route exact path="/regcs" element={<Registercs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
