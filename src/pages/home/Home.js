import React, { useContext, useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { ScreenContext } from '../../context/ScreenContext'
import MainSection from '../../sections/MainSection'
import Button from '../../components/Button'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdSettings } from 'react-icons/io'
import {BsArrowLeft} from 'react-icons/bs'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MobileFilters from '../../components/MobileFilters'

const Home = () => {

    const { size } = useContext(ScreenContext)

    const [cardData, setCardData] = useState([])
    const [isMobileFilters, setIsMobileFilters] = useState(false)
    const handle = useFullScreenHandle()

    useEffect(() => {

        setCardData([
            {
                heading: 'TruCheck™',
                text: 'Filter your results with validated, available listings',
                image: 'https://www.bayut.com/assets/truCheckCardSmallBackground_noinline.bb74c1b37c5aeae705e739c847b51255.svg'
            },
            {
                heading: 'Search 2.0',
                text: 'Find Homes by commute time',
                image: 'https://www.bayut.com/assets/iconCommuteCard_noinline.6c4e9fd28593d97258bfc72a5dce4cad.svg'
            },
            {
                heading: 'Map View',
                text: 'Search for properties in preffered areas using a map',
                image: 'https://www.bayut.com/assets/mapViewCardSmallBackground_noinline.97505e844a8982d59131ce15ead6dc84.svg'
            },

        ])
        return () => {

        }
    }, [])

    const drawerWidth = 240;


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'space-between',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        headerLeft: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100px'
        }
    }));

    const [open, setOpen] = React.useState(false);




    const MobHeader = () => {

        const classes = useStyles();
        const theme = useTheme();

        const handleDrawerOpen = () => {
            setOpen(true);
        };

        const handleDrawerClose = () => {
            setOpen(false);
        };

        const [show, setShow] = useState(false)



        return (
            <>
                <div className="mob-main">
                    <div className="mob-header">
                        <IconButton
                            color="white"
                            fill="white"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={'https://www.bayut.com/assets/logoBayutWhiteEN_noinline.e37f94fd11ee1921d63f993bf6bb6a0a.svg'} />
                        <div>

                        </div>
                    </div>

                    <div className='mob-header-below'>
                        <p>Search properties for sale and to rent in the UAE</p>
                        <div className='mob-header-each'>
                            <Button onClick={() => setShow(true)} text="Property Search" type="blue" width={'40%'} />
                            <Button text="TruValue" type="blue" width={'40%'} />
                        </div>
                    </div>

                    {
                        show &&

                        <MobileFilters show={show} handleClose={()=> setShow(false)} />
                    }


                </div>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <div className={classes.headerLeft}>
                            <IoMdSettings />
                            <p style={{ fontWeight: 600 }}>العربية</p>
                        </div>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <AiOutlineClose /> : <AiOutlineClose />}
                        </IconButton>
                    </div>
                    <div style={{ alignSelf: 'center' }}>
                        <Button text="Sign up or Log in" type="green" width="200px" />
                    </div>
                    <List>
                        {['Blog', 'Find an Agency', 'Floor Plans', 'Guides', 'Market Intelligence', 'Agent Portal', 'Events', 'Careers', 'Company'].map((text, index) => (
                            <ListItem button key={text}>

                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>

                </Drawer>
            </>

        )

    }


    return (
        <div className="home-main" style={{ marginLeft: open && '240px' }}>
            {
                size > 800 ?
                    <Header /> :
                    <MobHeader />
            }
            {
                size > 800 && <MainSection />
            }

            <div className="cards-container">
                {cardData.map((each, index) => {
                    return <Card {...each} />
                })}
            </div>

            {/* {isMobileFilters && <MobileFilters show={isMobileFilters} hide={()=> setIsMobileFilters(false)}/> } */}
        </div>
    )
}

export default Home