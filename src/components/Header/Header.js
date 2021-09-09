import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router';
import { goToStylizedJokes } from '../../Routes/coordinator';

const useStyles = makeStyles({
  root: {
    minWidth: '100vw',
    minHeight: '10vh',
    background: '#424242'
  },
  typography: {
    minHeight: '10vh',
    display: 'grid',
    placeItems: 'center',
    marginTop: '30px'
  },
  button: {
    marginLeft: '1600px',
    marginTop: '-100px',
    
  }
});


function Header() {

  const classes = useStyles();
  const history = useHistory()

  return (
    <div className={classes.root}>
      <Typography className={classes.typography}
        variant="h1" component="h2" gutterBottom>
        <img src='https://fontmeme.com/permalink/210908/d67c488fb6982d5b3270b6739ac7abae.png'></img>
        <div className={classes.button}>
          <Button onClick={() => goToStylizedJokes(history)} variant="contained" color="secondary">
            Jokes Random
          </Button>
        </div>
      </Typography>
    </div>
  )
}
export default Header;