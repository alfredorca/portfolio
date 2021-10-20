import { BrowserRouter, Switch, Route } from "react-router-dom";


import './App.css';
import NavBar from './components/NavBar';
import AboutMeView from "./Views/AboutMeView";
import HomeView from "./Views/HomeView";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path='/' component={HomeView}/>
        <Route exact path='/about' component={AboutMeView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
