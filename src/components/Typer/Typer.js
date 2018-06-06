import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import './Typer.css';

const Typer = ({ code }) => {
    return (
      <Typist className="code-text" avgTypingDelay={75}>
        {code}
      </Typist>
    );
}

export default Typer;