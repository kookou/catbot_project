import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserInfo from './UserInfo'
import { Grid } from '@material-ui/core';
import UserDeliveryList from './UserDeliveryList'
import Pagination from '@material-ui/lab/Pagination';
import Container from '@material-ui/core/Container';



const review = [
  {
    shop: "네네치킨",
    date: "09/05 (금)",
    menu: " 순살치킨 ＋ 순살치킨/1(순살 소스선택(후라이드),순살 소스선택(간장),기본음료선택(콜라사이즈업),추가선택(무추가))",
  },
  {
    shop: "네네치킨",
    date: "09/05 (금)",
    menu: " 순살치킨 ＋ 가선택(무추가))",
  },
  {
    shop: "네네치킨",
    date: "09/05 (금)",
    menu: " 순살치킨 ＋ 순살치킨/1(순살 소스선택(후라이드),순살 소스선택(간장),기본음료선택(콜라사이즈업),추가선택(무추가))",
  },

]


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  topmargin: {
    marginTop: theme.spacing(5),

  },
  nav: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 700,
    marginTop: theme.spacing(3),
    // maxWidth: 1050,

  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    // marginTop: theme.spacing(3),
    paddingTop: 40,
  },
  pagi: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  margintop :{
    marginTop : theme.spacing(2)
  }


}));




const Usernav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.nav}>
      <Grid container className={classes.mainGrid} justify="center">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="주문내역" {...a11yProps(0)} />
          <Tab label="정보수정" {...a11yProps(1)} />

        </Tabs>
        <TabPanel value={value} index={0} className={classes.margintop}>
            <Typography component="h1" variant="h5"  align="center">
              주문내역
            </Typography>
            {review.map((post) => (
              <UserDeliveryList key={post.shop} post={post} />
            ))}
          <Grid container justify="center" alignItems="flex-end">
            <Pagination count={10} className={classes.pagi} />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.margintop}>
        <Typography component="h1" variant="h5"  align="center" >
              정보수정
          </Typography>
            <UserInfo />
        </TabPanel>
      </Grid>
    </div>
  );
}

export default Usernav