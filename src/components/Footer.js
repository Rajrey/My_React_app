
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
 import { SiFacebook, SiInstagram, SiLinkedin,SiGmail } from 'react-icons/si';
const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    // paddingTop: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(80),
    padding: `${theme.spacing(6)}px 0`,
    bottom: theme.spacing(0),
    // position: 'relative',
  }
});
 
function Footer(props) {
  const { classes } = props;
 
  return (
    // <footer className={classes.footer}>
    //   <Paper className={classes.root} elevation={1}>
    //     <Typography variant="h5" component="h3">
    //       React App with Material UI
    //     </Typography>
    //     <Typography component="p">
    //       @2018 All right reserved
    //     </Typography>
    //   </Paper>
    // </footer>

     <footer className={classes.footer} id="contact">
      
       
     <div className="socialMedia">
     <Typography variant="h4" component="h4" gutterBottom  style={{color: "#ffff"}}>
 
<p>Get in Touch</p>  
 </Typography>
       <ul>
         <li>
           <a
             href="https://github.com/DONROB3R7"
             target="_blank"
             rel="nofollow noopener noreferrer"
           >
             <SiFacebook style={{ fontSize: 30 }} />
           </a>

           <a
             href="https://www.linkedin.com/in/costache-robert/"
             target="_blank"
             rel="nofollow noopener noreferrer"
           >
             <SiInstagram style={{ fontSize: 30 }} />
           </a>
           <a
             href="https://codesandbox.io/u/DONROB3R7/sandboxes"
             target="_blank"
             rel="nofollow noopener noreferrer"
           >
             <SiLinkedin style={{ fontSize: 30 }} />
           </a>
           <a
             href="https://codesandbox.io/u/DONROB3R7/sandboxes"
             target="_blank"
             rel="nofollow noopener noreferrer"
           >
             <SiGmail style={{ fontSize: 30 }} />
           </a>
         </li>
       </ul>
     </div>
   </footer>

    
  );
}
 
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(Footer);