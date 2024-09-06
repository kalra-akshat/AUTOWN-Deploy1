import './App.css';
import './index.css';
import {
  BrowserRouter as Router,Routes,
  Route
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
import PSstudents from './Components/PSstudents';
import Event from './Components/Event';
import { Events } from 'react-scroll';

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
          <Route exact path="/psstudents" element={<PSstudents/>}/>
          <Route exact path="/events" element={<Event/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
