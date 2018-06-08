import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from 'Footer/Footer';
import 'utils/fonts.css';
import { ParallaxProvider } from 'react-skrollr';
import Main from 'Main/Main';
// import Code from 'Code/Code';

class App extends React.Component {
  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <Main />
            <Footer />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
