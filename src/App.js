import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import NavBar from './components/NavBar';
import DJScreen from './components/DJScreen';
import ViewerScreen from './components/ViewerScreen';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <DJScreen />
        <ViewerScreen />
      </div>
      

    )
  }
}

export default App;
