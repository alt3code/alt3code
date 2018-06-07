import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingInfo from 'LandingInfo/LandingInfo';
import LandingHeader from 'LandingHeader/LandingHeader';
import Navbar from 'Navbar/Navbar';
import Footer from 'Footer/Footer';
import 'utils/fonts.css';
import { ParallaxProvider } from 'react-skrollr';
// import Code from 'Code/Code';

class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <MuiThemeProvider>
          <div className="App">
            <Navbar />
            <div className="main">
              <Parallax strength={600}>
                <LandingHeader />
                <LandingInfo />
                <Background className="custom-bg" />
              </Parallax>
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
      </ParallaxProvider>
    );
  }
}

export default App;
