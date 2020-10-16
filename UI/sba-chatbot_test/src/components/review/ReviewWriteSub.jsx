import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import FeaturedPostReviewWrite from './FeaturedPostReviewWrite';
import FeaturedPostMenu_sum from './FeaturedPostMenu_sum';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ReviewImageUpload from './ReviewImageUpload';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
// import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  input: {
    display: 'none',
  },
  rating:{
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  button:{
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  textfield:{
    marginTop: theme.spacing(1),

  },

}));

const featuredPosts = [
  {
    image: 'https://source.unsplash.com/random',
    title: 'ba**님',
    date: '순살치킨 ＋ 순살치킨/1(순살 소스선택(후라이드),순살 소스선택(간장),기본음료선택(콜라사이즈업),추가선택(무추가))',
    description:
      '으아아아아아 리엑트 너무 어려워 미친 화면단 어케 만들어야되냐 죽을거 같다 왜이렇게 왔다갔다해 복잡해 죽겠네 정신 없어 야ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ발 으아아아아아아아아아',
    imageText: '네네 메인',
  },
];

export default function ReviewWriteSub(props) {
  const classes = useStyles();
  const { archives, description, social, title } = props;
  const [value, setValue] = React.useState(0);



  return (
    <Grid item xs={12} md={12}>
       <div className={classes.root}>
         <Grid container alignItems="center" className={classes.rating}>
          <Grid>
            <Typography gutterBottom variant="h6">
              맛
            </Typography>
          </Grid>
          <Grid item>
            <Rating name="teste" defaultValue={2.5} precision={0.5} size="large" />
          </Grid>
          <Grid>
            <Typography gutterBottom variant="h6">
              양
            </Typography>
          </Grid>
          <Grid item>
            <Rating name="yarng" defaultValue={2.5} precision={0.5} size="large" />
          </Grid>
          <Grid>
            <Typography gutterBottom variant="h6">
              배달
            </Typography>
          </Grid>
          <Grid item>
            <Rating name="delivery" defaultValue={2.5} precision={0.5} size="large" />
          </Grid>
         </Grid>
         <Grid container alignItems="center">
           <Grid>
            <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            />
            <label htmlFor="contained-button-file">
              <Button className={classes.button} variant="contained" color="primary" component="span" alignItems="center">
                Upload
              </Button>
            </label>
            </Grid>
         </Grid>
      
        <Grid container>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField className={classes.textfield} 
            id="outlined-multiline-static"
            fullWidth
            multiline
            rows={20}
            defaultValue="리뷰를 작성해 주세요"
            variant="outlined"
          />
        </form>
        </Grid>
          <Grid className={classes.button}>
            <Button variant="contained" color="primary" disableElevation>
            확인
            </Button>
            <Button variant="contained" color="primary" disableElevation>
            취소
            </Button>
          </Grid>
    </div>
    </Grid>
  );
}

ReviewWriteSub.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};