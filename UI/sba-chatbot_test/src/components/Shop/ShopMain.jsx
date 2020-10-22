import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import ShopInfo from '../review/ShopInfo';
import MenuAndReviewArea from '../review/MenuAndReviewArea';
import Footer from '../Footer';
import NewHeader from '../NewHeader';
import Navigation from '../Navigation';
import Paper from '@material-ui/core/Paper';
import ShopList from './ShopList';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
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

const shoplist = [
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨1',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨2',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨3',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨4',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼'
    },
];


const ShopMain = () =>{
    const classes = useStyles();

    return(
        <React.Fragment>
        <CssBaseline />
        <Header title="Blog" sections={sections} />
        <NewHeader />
        <Navigation />
        <Grid container justify="center" >
            {shoplist.map((post) => (
                <ShopList key={post.shop_name} post={post}/>
            ))}

        </Grid>

        <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
    );
}
    

export default ShopMain