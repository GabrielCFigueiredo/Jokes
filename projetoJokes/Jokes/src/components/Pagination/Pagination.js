import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
      palette: {
        secondary: {
            main: '#424242'
        }
      }
    },
  }));


function PaginationCom({pages, setCurrentPage}) {

    
      const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination count={pages} color="secondary" 
            onChange={(event, value) => setCurrentPage(value - 1)}
            pages={pages}
            hideNextButton={true}
            hidePrevButton={true}
            />
            </div>
            
    )
}
export default PaginationCom;