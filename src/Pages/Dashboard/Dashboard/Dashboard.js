
import * as React from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, Button } from '@mui/material/';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';
import { Nav, Navbar, Overlay, Popover } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 210;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor: "black",
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Dashboard = () => {
    const { user, admin, logOut } = useAuth();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);

    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    // popover 
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null)

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };


    // logout 
    const navigate = useNavigate()
    // logout 
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to Logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                navigate('/')
                Swal.fire(
                    'Login out',
                    'Logout successfully.',
                    'success'
                )
            }
        })
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar open={open} className="bg-light text-dark">
                <Toolbar className="d-flex align-items-center">
                    <IconButton onClick={handleDrawerClose}
                        sx={{ mr: 2, ...(!open && { display: 'none' }) }}
                        className="fs-2">
                        {theme.direction === 'ltr' ? <CloseIcon className="fs-1" /> : <CloseIcon className="fs-1" />}
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}

                    >
                        <MenuIcon className="fs-1" />
                    </IconButton>
                    <br />
                    <Typography className='text-info fw-bold' variant="h5" noWrap component="div">
                        Mobile Bazar
                    </Typography>

                    {user.email && <div className='ms-auto me-5' ref={ref}>
                        <h1 onClick={handleClick} style={{ cursor: 'pointer' }}><i className="fas fa-user-circle"></i></h1>

                        <Overlay
                            show={show}
                            target={target}
                            placement="bottom"
                            container={ref}
                            containerPadding={20}
                        >
                            <Popover id="popover-contained" className='border-0 bg-light shadow'>
                                <Popover.Header className='border-0' > <h5 className='text-center text-primary'>{user.displayName}</h5></Popover.Header>
                                <Popover.Body>
                                    <p>{user.email}</p>
                                    <HashLink to="/home#home" className="text-decoration-none"><Button variant='contained' className=" px-3 w-100 py-0 rounded-pill ">HOME</Button></HashLink>
                                    <Button onClick={handleLogout} variant='contained' className=" px-3 w-100 py-0 rounded-pill  mt-2">LOGOUT</Button>
                                </Popover.Body>
                            </Popover>
                        </Overlay>
                    </div>}



                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >

                <List className="border-0 text-dark bg-light shadow-sm" style={{ height: '100vh', paddingTop: '65px' }}>
                    <ListItem button>
                        <HashLink to="/dashboard/userProfile" className='text-decoration-none w-100 text-dark fw-bold'>PROFILE</HashLink>
                    </ListItem>

                    {user.email && admin && <>
                        <ListItem button>
                            <HashLink to="/dashboard/manageOrders" className='text-decoration-none w-100 text-dark fw-bold'>MANAGE ORDERS</HashLink>
                        </ListItem>

                        <ListItem button>
                            <HashLink to="/dashboard/addBlog" className='text-decoration-none w-100 text-dark fw-bold'>ADD A BLOG</HashLink>
                        </ListItem>

                        <ListItem button>
                            <HashLink to="/dashboard/manageBlogs" className='text-decoration-none w-100 text-dark fw-bold'>MANAGE BLOGS</HashLink>
                        </ListItem>

                        <ListItem button>
                            <HashLink to="/dashboard/makeAdmin" className='text-decoration-none w-100 text-dark fw-bold'>CREATE ADMIN</HashLink>
                        </ListItem>

                    </>}


                    {
                        !admin && <>
                            <ListItem button>
                                <HashLink to="/home#blogs" className='text-decoration-none w-100 text-dark fw-bold'>ALL BLOGS</HashLink>
                            </ListItem>

                            <ListItem button>
                                <HashLink to="/dashboard/myOrders" className='text-decoration-none w-100 text-dark fw-bold'>MY EXPERIENCE</HashLink>
                            </ListItem>

                            <ListItem button>
                                <HashLink to="/dashboard/addReview" className='text-decoration-none w-100 text-dark fw-bold'>ADD REVIEW</HashLink>
                            </ListItem>
                        </>
                    }

                    <Navbar
                        collapseOnSelect
                        expand="lg"
                        variant="light"
                        fixed="bottom"
                    >
                        <Nav.Link className=' text-decoration-none ms-3 mb-4' as={HashLink} to="/home"><Button variant="contained" className=" w-100  rounded-pill mt-4 ">
                            BACK TO HOME
                        </Button></Nav.Link>
                    </Navbar>
                </List>

            </Drawer>
            <Main open={open} className="border-0" style={{ paddingTop: '20px' }}>
                <div className="home-background">
                    <Outlet />
                </div>

            </Main>
        </Box>
    );
};

export default Dashboard;