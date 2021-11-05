import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home';
import about from './pages/about';
import creative from './pages/creative';
import theory from './pages/theory';
import art from './pages/art';

import theoryone from './pages/theoryone';
import theorytwo from './pages/theorytwo';
import theorythree from './pages/theorythree';
import theoryfour from './pages/theoryfour';
import theoryfive from './pages/theoryfive';
import theorysix from './pages/theorysix';
import creativeone from './pages/creativeone';
import creativetwo from './pages/creativetwo';
import creativethree from './pages/creativethree';
import creativefour from './pages/creativefour';
import creativefive from './pages/creativefive';
import creativesix from './pages/creativesix';
import Footer from './pages/footer';









function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={home} />
        <Route path="/about" exact component={about} />
        <Route path='/creative' component={creative} />
        <Route path='/theory' component={theory} />
        <Route path='/art' component={art} />
        <Route path='/theoryone' component={theoryone} />
        <Route path='/theorytwo' component={theorytwo} />
        <Route path='/theorythree' component={theorythree} />
        <Route path='/theoryfour' component={theoryfour} />
        <Route path='/theoryfive' component={theoryfive} />
        <Route path='/theorysix' component={theorysix} />
        <Route path='/creativeone' component={creativeone} />
        <Route path='/creativetwo' component={creativetwo} />
        <Route path='/creativethree' component={creativethree} />
        <Route path='/creativefour' component={creativefour} />
        <Route path='/creativefive' component={creativefive} />
        <Route path='/creativesix' component={creativesix} />
       
      </Switch>
   <Footer/>
    </Router>
  );
}

export default App;




