import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import ShopInfo from './ShopInfo';
import MenuAndReviewArea from './MenuAndReviewArea';
import Footer from '../Footer';
import post1 from '../blog-post.1.md'; 
import post2 from '../blog-post.2.md';
import post3 from '../blog-post.3.md';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  
}));

const sections = [
  { title: '로그인', url: './signin' },
  { title: '리뷰보기', url: '/review' },
  { title: '리뷰쓰기', url: '/reviewwrite' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const shopInfo = [
  {
    image: 'https://source.unsplash.com/random',
    title: '네네치킨',
    date: '최소 주문 금액 : 14,000',
    description:
      '결제 신용카드, 현금',
    time:
      '배달 소요 시간 75~90분',
    imageText: '네네 메인',
  },

];

const posts = [post1, post2, post3];
  
const Review = () => 

<React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <Grid container spacing={4}>
            {shopInfo.map((post) => (
              <ShopInfo key={post.title} post={post} />
            ))}
          </Grid>

          <Grid container spacing={5} className={useStyles.mainGrid}>
            <MenuAndReviewArea/>
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>

export default Review