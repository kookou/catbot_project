import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const tileData = [
    {
        img: 'https://source.unsplash.com/random',
        title:'하',
        author: 'author',
        featured: true,
    },
    {
        img: 'https://source.unsplash.com/random',
        title:'하',
        author: 'author',
        featured: true,
    },
    {
      img: 'https://source.unsplash.com/random',
      title:'하',
      author: 'author',
      featured: true,
    },
    {
      img: 'https://source.unsplash.com/random',
      title:'하',
      author: 'author',
      featured: true,
    },

]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const ReviewImageUpload = (props) =>{
  const classes = useStyles();

  return (
          <Grid>
            <input
              accept='image/jpg,impge/png,image/jpeg,image/gif'
              name='profile_img'
              // onChange={this.handleFileOnChange}
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <GridList className={classes.gridList} cols={4}>
                {tileData.map((tile) => (
                  <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                      actionIcon={
                        <IconButton aria-label={`star ${tile.title}`}>
                          <StarBorderIcon className={classes.title} />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
              <Button className={classes.button} variant="contained" color="primary" component="span" alignItems="center">
                사진 등록
              </Button>
            </label>
          </Grid>
  );
}
export default ReviewImageUpload