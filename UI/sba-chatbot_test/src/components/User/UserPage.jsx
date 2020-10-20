import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Footer from '../Footer';
import Usernav from './Usernav';
import Navigation from '../Navigation';



const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(0),
        backgroundColor: theme.palette.background.paper,
    },
}));

const sections = [
    { title: '로그인', url: './signin' },
    { title: '리뷰보기', url: '/review' },
    { title: '리뷰쓰기', url: '/reviewwrite' },
    { title: '마이페이지', url: '/userpage' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];





const UserPage = () => {
const classes = useStyles();

  return(
    <React.Fragment>
        <CssBaseline />
        {/* <Container maxWidth="md"> */}
            {/* <Header title="Blog" sections={sections} /> */}
            <Navigation/>
        {/* </Container> */}
        <Grid container justify="center"className={classes.mainGrid}>
            <Usernav/>
        </Grid>

        <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  )
}
export default UserPage