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
import UserTest from './UserTest'
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
    nav: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 1000,
        marginTop: theme.spacing(3),
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        // marginTop: theme.spacing(3),
        width :200,
        paddingTop:40,
        fontWeight:800,
    },
}));

export default function Usernav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.nav}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="정보수정" {...a11yProps(0)} />
                <Tab label="주문내역" {...a11yProps(1)} />
                <Tab label="리뷰관리" {...a11yProps(2)} />

            </Tabs>
            <TabPanel value={value} index={0} justify="center">
                <Grid container justify="center">
                    <UserInfo />
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container justify="center">
                    <UserDeliveryList />
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid container justify="center">

                </Grid>
            </TabPanel>

        </div>
    );
}
