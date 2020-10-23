import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Footer from '../Footer';
import NewHeader from '../NewHeader';
import MainNavigation from './MainNavigation';
import Paper from '@material-ui/core/Paper';
import MainList from './MainList';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    // paper: {
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // },
    wd:{
        width : 1050,
        margin:"auto"
    },
}));

const sections = [
    { title: '메인', url: '/main' },
    { title: '리뷰보기', url: '/review' },
    { title: '리뷰쓰기', url: '/reviewwrite' },
    { title: '마이페이지', url: '/userpage' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

const shoplistl = [
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨1',
        shop_rev_avg:
            '4.5',
        pred_rev_avg:
            '4.7',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'

    },
    {
        shop_img: 'https://rev-static.yogiyo.co.kr/restaurants/thumbnail/stock_img/족발보쌈/족발/5fb02edc8f0531ede141222ae99cafcc_tn.jpg',
        shop_name: '네네치킨1',
        shop_rev_avg:
            '4.5',
        pred_rev_avg:
            '4.7',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'

    },
    {
        shop_img: 'https://rev-static.yogiyo.co.kr/franchise/thumbnail/20181228144604231071_c1167f872d2823627279e43082f41e0e_tn.jpg',
        shop_name: '네네치킨1',
        shop_rev_avg:
            '4.5',
        pred_rev_avg:
            '4.7',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'

    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨1',
        shop_rev_avg:
            '4.5',
        pred_rev_avg:
            '4.7',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'

    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨1',
        shop_rev_avg:
            '4.5',
        pred_rev_avg:
            '4.7',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'

    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨1',
        shop_rev_avg:
            '4.5',
        pred_rev_avg:
            '4.7',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'

    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨1',
        shop_rev_avg:
            '4.5',
        pred_rev_avg:
            '4.7',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'

    },
    
 

];




const Main = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header title="Blog" sections={sections} />
            <NewHeader />
            <MainNavigation/>
                <Grid container justify="center" className={classes.wd}>
                <Grid container justify="center">
                <Typography variant="h5" >
                    회원님의 취향을 분석한 추천 매장 리스트
                </Typography>

                <Divider variant="middle" />
                </Grid>
                    <Grid container justify="center"spacing={2} >
                        {shoplistl.map((post) => (
                            <MainList key={post.shop_name} post={post}  />
                        ))}
                        
                    </Grid>
                </Grid>
                
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </React.Fragment>
    );
}


export default Main