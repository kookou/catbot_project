import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: 670,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    inline: {
        display: 'inline',
    },
    marginzero: {
        margin: 0,
    },
    pagi : {
        '& > *': {
            marginTop: theme.spacing(2),
          },
    }
}));


export default function UserDeliveryList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">

                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Ali Connors
                  </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ListItemSecondaryAction>
                    <Button variant="outlined" color="primary" href="#outlined-buttons" >
                        리뷰쓰기
                </Button>
                </ListItemSecondaryAction>

            </ListItem>
            <Divider variant="inset" component="li" variant="middle" />
            <ListItem alignItems="flex-start">

                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                to Scott, Alex, Jennifer
                  </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                />
                <ListItemSecondaryAction>
                    <Button variant="outlined" color="primary" href="#outlined-buttons" >
                        리뷰쓰기
                </Button>
                </ListItemSecondaryAction>

            </ListItem>
            <Divider variant="inset" component="li" variant="middle" />
            <ListItem alignItems="flex-start">

                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Sandra Adams
                  </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                />
                <ListItemSecondaryAction>
                    <Button variant="outlined" color="primary" href="#outlined-buttons" >
                        리뷰쓰기
                </Button>
                </ListItemSecondaryAction>
            </ListItem>
            <div className={classes.pagi}>

                <Pagination count={10} color="secondary" />
            </div>
        </List>

    );
}