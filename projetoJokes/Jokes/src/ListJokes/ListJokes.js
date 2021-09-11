import { makeStyles, TextField, Typography } from '@material-ui/core';
import Pagination from '../components/Pagination/Pagination';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import Header from '../components/Header/Header';
import { goToSelectJokes } from '../Routes/coordinator';
import { BASE_URL } from '../Constants/Constants';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        border: '1px solid black',
        width: '800px',
        padding: '1em',
        margin: '1em',
        backgroundColor: '#fafafa',
        borderRadius: '5px',
        '&:hover': {
          backgroundColor: '#424242',
          color: '#ff5722',
      },
    },
    typography: {
        fontSize: '18px',
        cursor: 'pointer',
    },
    container: {
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#ffccbc'
    },

});

function ListJokes() {


    const classes = useStyles();

    const [list, setList] = useState([])
    const [itensPage, setItensPage] = useState(20)
    const [currentPage, setCurrentPage] = useState(0)

    const history = useHistory()

    const joke = (id) => {
        goToSelectJokes(history, id)
    }
    const pages = Math.ceil(list.length / itensPage)

    const startIndex = currentPage * itensPage
    const endIndex = startIndex + itensPage
    const currentList = list.slice(startIndex, endIndex)

    useEffect(() => {
        axios.get(BASE_URL)
            .then((response) => {
                setList(response.data.value)
            }).catch((error) => {
                console.error(error);
            });
    }, [itensPage])
    return (
        <div className={classes.container}>
            <Header />

            {currentList.map((list) => {
                return (
                    <form key={list.id} className={classes.root} noValidate autoComplete="off">
                        <Typography className={classes.typography} variant="h5">{list.id}</Typography>
                        <Typography onClick={() => joke(list.id)} className={classes.typography} variant="h5">{list.joke}</Typography>

                    </form>


                )
            })}
            <Pagination pages={pages} setCurrentPage={setCurrentPage} />
        </div>
    )
}
export default ListJokes;