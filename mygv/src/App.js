import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header/header';
import 'typeface-roboto';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
