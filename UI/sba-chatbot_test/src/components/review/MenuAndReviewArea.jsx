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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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
    <Grid item xs={12} md={12}>
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
         
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Grid container spacing={4}>
            {reviewdescription.map((post) => (
              <ReviewDescription key={post.title} post={post} />
            ))}
          </Grid>

      </TabPanel>
    </div>
    </Grid>
  );
}

MenuAndReviewArea.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

export default MenuAndReviewArea