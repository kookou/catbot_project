import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Rating from '@material-ui/lab/Rating';
import { PlayCircleFilledWhite } from '@material-ui/icons';


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
    height: 200,
  },
  shopMain : {
    marginBottom : 50,
    marginTop : 50,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      
    },
  },
  background:{
    backgroundColor : '#ffffff',
  },
  
});

function HalfRating() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <div className={classes.root}>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
}


export default function ShopInfo(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
      <Grid className={classes.shopMain}>
        <Grid className={classes.card}>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <HalfRating/>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                {post.time}
              </Typography>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

ShopInfo.propTypes = {
  post: PropTypes.object,
};