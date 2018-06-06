import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CodeImg from 'images/code.png';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import NavSearchBar from 'NavSearchBar/NavSearchBar';

const styles = {
  root: {
    flexGrow: 1,
  },
  toolbar: {
    marginTop: '2px',
  },
  flex: {
    flex: 1,
  },
  logo: {
    height: 40,
  },
};

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" color="primary" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <img src={CodeImg} className={classes.logo} alt="Logo"/>
          </Typography>
          {/*<NavSearchBar />*/}
          <Button color="inherit" onClick={() => { console.log('Projects'); }}>Projects</Button>
          <Button color="inherit" onClick={() => { console.log('Guides'); }}>Guides</Button>
          <Button color="inherit" onClick={() => { console.log('Snippets'); }}>Snippets</Button>
          <Button color="inherit" onClick={() => { console.log('Widgets'); }}>Widgets</Button>
          <Button color="inherit" onClick={() => { console.log('About Us'); }}>About Us</Button>
        </Toolbar>
        
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);