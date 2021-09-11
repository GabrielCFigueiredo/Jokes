import { Button, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { BASE_URL } from '../Constants/Constants';

const useStyles = makeStyles({
    root: {
      maxWidth: 845,
      minHeight: '80vh',
      marginLeft: '500px'
    },
    typography: {
        fontSize: 50,
    },
  });

function StylizedJokes() {

    const classes = useStyles();

    const [random, setRandom] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/random`)
        .then((response) => {
            console.log(response.data);
            setRandom(response.data)
        })
    },[])

    return(
        <Card style={{marginTop: '-30px', minHeight: '103vh', backgroundColor: '#ffccbc',}}>
            <Header/>
        <Card className={classes.root}>   
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="540"
          width="400"
          image="https://super.abril.com.br/wp-content/uploads/2019/07/site_chavesrisada.png?w=1024"
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
          {random.joke}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Card>
    )
}
export default StylizedJokes;