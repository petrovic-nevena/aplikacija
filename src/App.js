
import './App.css';
import Navbar from './Komponente/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './stranice';
import Contact from './stranice/contact';
import SignUp from './stranice/sign-up';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />           
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>      
    </Router>
  );
}

export default App;
