import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Footer from '../Footer';
import Usernav from './Usernav';



const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
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





const UserPage = () =>

    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
            <Header title="Blog" sections={sections} />
            <main>
                <Grid container className={useStyles.mainGrid} justify="center">
                    <Usernav/>
                </Grid>
            </main>
        </Container>
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>

export default UserPage