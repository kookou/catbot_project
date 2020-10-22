import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ReviewDescription from './ReviewDescription';
import ShopMenuInfo from './ShopMenuInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    maxWidth: 1000,
  },

}));

const reviewdescription = [
  {
    title: 'ba**님',
    image: 'https://source.unsplash.com/random',
    date: '순살치킨 ＋ 순살치킨/1(순살 소스선택(후라이드),순살 소스선택(간장),기본음료선택(콜라사이즈업),추가선택(무추가))',
    description:
      '으아아아아아 리엑트 너무 어려워 미친 화면단 어케 만들어야되냐 죽을거 같다 왜이렇게 왔다갔다해 복잡해 죽겠네 정신 없어 야ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ발 으아아아아아아아아아',
    imageText: '네네 메인',
  },
  {
    title: 'ba**님',
    image: 'https://source.unsplash.com/random',
    date: '순살치킨 ＋ 순살치킨/1(순살 소스선택(후라이드),순살 소스선택(간장),기본음료선택(콜라사이즈업),추가선택(무추가))',
    description:
      '으아아아아아 리엑트 너무 어려워 미친 화면단 어케 만들어야되냐 죽을거 같다 왜이렇게 왔다갔다해 복잡해 죽겠네 정신 없어 야ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ발 으아아아아아아아아아',
    imageText: '네네 메인',
  },
  {
    title: 'ba**님',
    image: 'https://source.unsplash.com/random',
    date: '순살치킨 ＋ 순살치킨/1(순살 소스선택(후라이드),순살 소스선택(간장),기본음료선택(콜라사이즈업),추가선택(무추가))',
    description:
      '으아아아아아 리엑트 너무 어려워 미친 화면단 어케 만들어야되냐 죽을거 같다 왜이렇게 왔다갔다해 복잡해 죽겠네 정신 없어 야ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ발 으아아아아아아아아아',
    imageText: '네네 메인',
  },
];

const shopmenu = [
  {
    food_name :'오리지널세트1（오리지널피자L 1판＋치즈오븐스파게티＋콜라 1.25L）',
    food_price:'23,000',
    food_img:'https://images.deliveryhero.io/image/yogiyo/STOCK_IMG/%EA%B8%B0%ED%83%80%EC%99%B8%EA%B5%AD%EC%9D%8C%EC%8B%9D/%EC%9A%94%EB%A6%AC/%EC%8A%A4%ED%83%81_20191002_DHK%EC%B4%AC%EC%98%81_%ED%80%98%EC%82%AC%EB%94%94%EC%95%84_Side02_1080x640.jpg?width=384&height=273&quality=100',

  },
    {
    food_name :'오리지널세트1',
    food_price:'23,000',
    food_img:'https://images.deliveryhero.io/image/yogiyo/STOCK_IMG/%EA%B8%B0%ED%83%80%EC%99%B8%EA%B5%AD%EC%9D%8C%EC%8B%9D/%EC%9A%94%EB%A6%AC/%EC%8A%A4%ED%83%81_20191002_DHK%EC%B4%AC%EC%98%81_%ED%80%98%EC%82%AC%EB%94%94%EC%95%84_Side02_1080x640.jpg?width=384&height=273&quality=100',

  },
  {
    food_name :'오리지널세트1（오리지널피자L 1판＋치즈오븐스파게티＋콜라 1.25L）',
    food_price:'23,000',
    food_img:'https://images.deliveryhero.io/image/yogiyo/STOCK_IMG/%EA%B8%B0%ED%83%80%EC%99%B8%EA%B5%AD%EC%9D%8C%EC%8B%9D/%EC%9A%94%EB%A6%AC/%EC%8A%A4%ED%83%81_20191002_DHK%EC%B4%AC%EC%98%81_%ED%80%98%EC%82%AC%EB%94%94%EC%95%84_Side02_1080x640.jpg?width=384&height=273&quality=100',

  },
]



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const MenuAndReviewArea = (props) => {
  const classes = useStyles();
  const { archives, description, social, title } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          <LinkTab label="메뉴보기"  {...a11yProps(0)} />
          <LinkTab label="리뷰보기" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4} justify="center">
          {shopmenu.map((post) => (
            <ShopMenuInfo key={post.food_name} post={post} />
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={4} justify="center">
          {reviewdescription.map((post) => (
            <ReviewDescription key={post.title} post={post} />
          ))}
        </Grid>

      </TabPanel>
    </div>
  );
}

MenuAndReviewArea.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

export default MenuAndReviewArea