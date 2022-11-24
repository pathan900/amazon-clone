import React from 'react'
import {Button, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center",
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(10),
        padding:'20px',
        width:'600px',
        height: '300px',
      },
    },
  }));

const OrderFinished = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        
            <Paper elevation={3} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
             <h1>Your order has been successfully placed with us.</h1>
                <h2>Thank you for ordering.</h2>
                <br/>
                <br/>
                
                <Link to="/">
                <Button variant="contained"  color="primary">Back to Home</Button>
            </Link>
            </Paper>
            
        </div>
    )
}

export default OrderFinished
