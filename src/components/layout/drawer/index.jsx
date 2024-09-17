import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { CssBaseline, Menu, MenuItem, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Container, Stack, useTheme } from '@mui/system';
import * as React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import LogoImg from '../../../assets/svg/LogoImg';
import { layout } from '../../../fakeData/layout';
import useThemeToggle from '../../../hook/useThemeToggle';
import { hexToRGBA } from '../../../utility/hex-to-rgba';
import Footer from '../footer';
import Sidebar from '../sidebar';
const drawerWidth = 50;
function DrawerAppBar(props, { children }) {
    const { pathname } = useLocation()
    const theme = useTheme();
    const { toggleTheme, mode } = useThemeToggle()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { routes, logoTitle } = layout?.header || {};
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box
            //  onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
            }}>
            <Stack
                direction="column"
                alignItems="center"
                justifyContent={"center"}
                spacing={1}
                sx={{
                    cursor: "pointer",
                }}
                component={Link}
                to="/"
                py={4}
            >
                <LogoImg
                    iconColor={theme.palette.text.primary}
                />
                <Typography variant='h4' fontWeight={800}>
                    {logoTitle}
                </Typography>
            </Stack>

            <Divider />
            <Stack
                gap={2}
                fontSize="1.2rem"
                textAlign={"left"}
                py={1}
                mt={2}
                onClick={handleDrawerToggle}
            >
                {routes.map((item) => (
                    <MenuItem key={item.id}
                        sx={{
                            backgroundColor: pathname === item.path ? hexToRGBA(theme.palette.background.paper, '.3') : "transparent",
                            borderRight: pathname === item.path ? `4px solid ${theme.palette.divider}` : "none",
                            color: pathname === item.path ? theme.palette.text.primary : theme.palette.text.secondary,
                            fontFamily: "FiraCode",
                            fontWeight: pathname === item.path ? 600 : 400,
                            padding: "0.5rem 1rem",
                            "&:hover": {
                                backgroundColor: hexToRGBA(theme.palette.background.paper, '.3'),
                                color: theme.palette.text.primary,
                                borderRight: `4px solid ${theme.palette.divider}`
                            }
                        }}
                        component={Link}
                        to={item.path}

                    >

                        <Box
                            component={'span'}
                            color={(theme) => theme.palette.primary.main}
                        >
                            #
                        </Box>
                        {item.name}
                    </MenuItem>
                ))}
            </Stack>
        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    // menu items 
    // const ModeList = () => {
    //     return (
    //         <Stack p={2} gap={2}>
    //             {
    //                 color.map((item) => {
    //                     return (

    //                         <MenuItem
    //                             key={item.id}
    //                             onClick={() => {
    //                                 dispatch(changeThemeWithColor(item))
    //                                 setSelectedIndex(item.id)
    //                                 handleClose()
    //                             }}
    //                             sx={{
    //                                 backgroundColor: item.bgColor,
    //                                 color: item.textLight,
    //                                 borderLeft: selectedIndex === item.id ? `4px solid #f44336` : "none",
    //                             }}
    //                         >
    //                             {item.name}
    //                         </MenuItem>

    //                     )
    //                 })
    //             }
    //         </Stack>
    //     )
    // }

    return (
        <Box sx={{
            display: 'flex',
        }}>
            <AppBar component="nav"
                sx={{
                    backgroundColor: (theme) => theme.palette.background.default,
                    boxShadow: 'none',
                    pl: {
                        md: 7,
                        xs: 0,
                    },
                    backgroundImage: 'none'
                }}

            >
                <Container maxWidth="lg">

                    <Toolbar disableGutters>
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2, display: { md: 'none' },
                                color: (theme) => theme.palette.text.primary,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
                            component="div"
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                                component={Link}
                                to="/"

                            >
                                <LogoImg
                                    iconColor={theme.palette.text.primary}
                                />
                                <Typography
                                    variant='body1'
                                    fontWeight={800}
                                    color={(theme) => theme.palette.text.primary}

                                >
                                    Sahab Uddin
                                </Typography>
                            </Stack>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                width: {
                                    xs: '100%',
                                    md: 'fit-content',
                                },
                                pr: 2,
                            }}
                        >
                            <IconButton
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={toggleTheme}

                            >
                                {mode === 'dark' ? <LightModeIcon
                                    sx={{
                                        color: (theme) => theme.palette.text.primary
                                    }}
                                /> : <NightlightIcon
                                    sx={{
                                        color: (theme) => theme.palette.text.primary
                                    }}
                                />}
                            </IconButton>
                        </Box>
                        <Stack sx={{ display: { xs: 'none', md: 'block' } }}
                            spacing={2}
                            direction="row"
                        >


                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {/* <ModeList /> */}
                            </Menu>
                            {
                                routes.map((route, index) => {
                                    return (
                                        <NavLink
                                            to={route.path}
                                            key={index}
                                            style={({ isActive }) => (isActive ?
                                                {
                                                    color: theme.palette.text.primary,
                                                    fontWeight: 600,

                                                }
                                                : {
                                                    color: theme.palette.text.secondary,
                                                    fontFamily: "FiraCode",
                                                    fontWeight: 400,

                                                })}
                                        >
                                            <span
                                                style={{
                                                    color: theme.palette.primary.main
                                                }}
                                            >#</span>
                                            <Box
                                                component="span"
                                                sx={{
                                                    "&:hover": {
                                                        color: (theme) => theme.palette.text.primary
                                                    }
                                                }}

                                            >{route.name}
                                            </Box>
                                        </NavLink>
                                    )
                                })
                            }
                        </Stack>

                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav" >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    PaperProps={{
                        sx: {
                            backgroundColor: (theme) => theme.palette.background.default,
                        }
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth}%` },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    top: 50,
                    left: 20,
                }}
            >
                <Sidebar />
            </Box>
            <Box component="main" sx={{
                // p: 2,
                // pr: 3,
                backgroundColor: (theme) => theme.palette.background.default,
                width: '100%',

            }}>
                <Toolbar />
                <Box
                    sx={{
                        pl: {
                            xs: 4,
                            md: 8,
                        }
                    }}
                >
                    <CssBaseline enableColorScheme />
                    <Outlet />
                    {children}
                    <Box mb={8} />

                    <Footer />

                </Box>
            </Box>
        </Box >
    );
}


export default DrawerAppBar;