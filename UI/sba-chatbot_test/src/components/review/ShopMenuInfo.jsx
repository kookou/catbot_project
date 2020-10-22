import React from 'react';
import PropTypes from 'prop-types';
import ReviewImage from './ReviewImage';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    maxWidth: 950,
    // marginTop: theme.spacing(1),
    // marginLeft:theme.spacing(3),
    marginBottom : theme.spacing(2),

  },
  margin:{
    marginLeft: theme.spacing(2),
  },

  img: {

    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  cardMedia: {
    width: 100 ,
    height: 100,
    padding:0,
  },
}));

function HalfRating() {
  const classes = useStyles();
  const [value, setValue] = React.useState(4);
  return (
    <div className={classes.root}>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
}


const ShopMenuInfo = (props) => {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item ld={12} justify="space-between"  >
      <Grid container className={classes.paper} alignItems="flex-start">
        <Hidden xsDown>
          <CardMedia className={classes.cardMedia} image={post.food_img}/>
        </Hidden>
        <Grid sm container>
          <Grid item container direction="column" className={classes.margin}>
              <Typography gutterBottom variant="h6">
                {post.food_name}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {post.food_price} 원
                </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="middle" />
    </Grid>
      


  );
}

ShopMenuInfo.propTypes = {
  post: PropTypes.object,
};

export default ShopMenuInfo