import { CardContent, CardMedia, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import Header from '../components/Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import { BASE_URL } from '../Constants/Constants';

const useStyles = makeStyles({
    root: {
      maxWidth: 845,
      minHeight: '80vh',
      marginLeft: '500px'
    },
    typography: {
        fontSize: 50,
    }
  });

function SelectJokes() {

    const classes = useStyles();

    const history = useHistory()
    const params = useParams()
    const [selectJoke, setSelectJoke] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/${params.id}`)
        .then((response) => {
            console.log(response.data.value);
            setSelectJoke(response.data.value)
        })
    },[])
    return (
        <Card style={{marginTop: '-30px', minHeight: '103vh', backgroundColor: '#ffccbc',}}>
            <Header/>
        <Card className={classes.root}>   
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="540"
          width="400"
          image="https://super.abril.com.br/wp-content/uploads/2016/12/oracc81culo_risada.jpg?quality=70&strip=all"
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography className={classes.typography} variant="body2" color="#424242" component="p">
          {selectJoke.joke}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Card>
    )
}
export default SelectJokes;