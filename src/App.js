
import './App.css';
import HeroSection from './Components/HeroSection';
import SideNav from './Components/SideNav';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Kanban from './Components/Kanban/Kanban';
import NoteSection from './Components/Notes/NoteSection';
import Clock from './Components/Clock/Clock';
function App() {
  return (
    <Router>
    <div className="App ">
      <SideNav/>
      <Switch>
      <Route path ="/" exact component={Home} />
      <Route path ="/home"  component={HeroSection} />
      <Route path ="/kanban" component={Kanban}/>
      <Route path ="/clock"  component={Clock}/>
      <Route path ="/notes" component={NoteSection}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home =()=>{
  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default App;
