import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.css';

const Footer = () => {
  return (
    <div className="customFooter">
	   <Grid container
	   		alignItems="center"
            direction="row"
            justify="space-around"
        >
            <Grid key="Contact1" item xs={12} md={4}>
                <p className="contactTitle">Contact</p>
                <br />
                <p className="contactDescription">Contact us.</p>
            </Grid>
            <Grid key="Contact2" item xs={12} md={4}>
                <p className="contactTitle">Contact</p>
                <br />
                <p className="contactDescription">Contact us.</p>
            </Grid>
            <Grid key="Contact3" item xs={12} md={4}>
                <p className="contactTitle">Contact</p>
                <br />
                <p className="contactDescription">Contact us.</p>
            </Grid>
	   </Grid>
    </div>
  );
}

export default Footer;
