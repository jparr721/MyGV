import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import red from 'material-ui/colors/red';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';

//Pages
import Header from '../src/components/header';
import Routes from '../src/components/routes';

const theme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: grey,
    error: red,
  }),
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="container-fluid content">
          <Header />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

// <Drawer />
// <ReactRouter>
//   <Home path='/' />
//   <Settings path='/settings' />
// </ReactRouter>
