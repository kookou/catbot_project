import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


const useStyles = makeStyles((theme) => ({
    divroot: {
        flexGrow: 1,
        width:912,
        marginTop: theme.spacing(3),
      },
    root: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: 150,
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    wd:{
        width:912,
    }
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


const ShopList = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { post } = props;

    return (
        <div className={classes.divroot} justify="center">
            <Grid container spacing={3} item md={12} className={classes.wd} justify="center" >
                <Grid item xs={6}>
                    <Card className={classes.root} square elevation={0} variant="outlined">
                        <Grid item xs className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {post.shop_name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {post.shop_rev_avg} / 예상 4.7
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    리뷰  {post.shop_rev_amt} / {post.food_name}
                                </Typography>
                            </CardContent>
                        </Grid>
                        <CardMedia
                            className={classes.cover}
                            image={post.shop_img}
                        />
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.root} square elevation={0} variant="outlined">
                        <Grid item xs className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {post.shop_name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {post.shop_rev_avg} / 예상 4.7
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    리뷰  {post.shop_rev_amt} / {post.food_name}
                                </Typography>
                            </CardContent>
                        </Grid>
                        <CardMedia
                            className={classes.cover}
                            image={post.shop_img}
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>


    );
}

ShopList.propTypes = {
    post: PropTypes.object,
};

export default ShopList