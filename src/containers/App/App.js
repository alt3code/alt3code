import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingInfo from 'LandingInfo/LandingInfo';
import LandingHeader from 'LandingHeader/LandingHeader';
import Navbar from 'Navbar/Navbar';
import Footer from 'Footer/Footer';
import 'utils/fonts.css';
// import Code from 'Code/Code';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar />
          <div className="main">
            <Parallax strength={600}>
              <LandingHeader />
              <Parallax strength={250}>
                <LandingInfo />
              </Parallax>
              <Background className="custom-bg" />
            </Parallax>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
