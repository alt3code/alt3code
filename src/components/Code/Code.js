import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PropTypes from 'prop-types';
import { xcode } from 'react-syntax-highlighter/styles/prism';
import './Code.css';

const Code = ({ language, code, type }) => {
  return (
  		<SyntaxHighlighter language='language' style={xcode} className={"code-"+type}>{code}</SyntaxHighlighter>
  );
}

Code.propTypes = {
	language: PropTypes.string.isRequired,
	code: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
}

export default Code;