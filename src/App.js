import { BrowserRouter, Switch, Route } from "react-router-dom";


import './App.css';
import NavBar from './components/NavBar';
import HomeView from "./Views/HomeView";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path='/' component={HomeView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
