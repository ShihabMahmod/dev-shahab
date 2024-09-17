import { createTheme } from '@mui/material/styles';


const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#C778DD',
            light: '#d79fe7',
            dark: "#572aa5",
            contrastText: '#FFFFFF',

        },
        secondary: {
            main: '#ABB2BF',
            light: '#cbd1da',
            dark: '#1d232d',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#e3f2fd',
            paper: '#FFFFFF',
        },
        divider: '#ABB2BF',
        text: {
            primary: '#000000',
            secondary: '#00000099',
            disabled: '#00000066',
        },
    },
    typography: {
        fontFamily: 'FiraCode',
        h1: {
            fontSize: 32,
            fontWeight: 600,
        },
        h2: {
            fontSize: 32,
            fontWeight: 500,
        },
        h3: {
            fontSize: 24,
            fontWeight: 500,
        },
        h4: {
            fontSize: 20,
            fontWeight: 500,
        },
        body1: {
            fontSize: 16,
            fontWeight: 400,
        },
        body2: {
            fontSize: 14,
            fontWeight: 400,
        },
        button: {
            fontSize: 16,
            fontWeight: 500,
            textTransform: 'none',
        },
        caption: {
            fontSize: 12,
            fontWeight: 400,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1080,
            lg: 1440,
            xl: 1920
        }
    },
    spacing: 8,
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'div',
                    h6: 'div',
                    subtitle1: 'div',
                    subtitle2: 'div',
                    body1: 'div',
                    body2: 'div'
                }
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 4
                },
                paragraph: {
                    fontSize: 16,
                    lineHeight: 1.7
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover'
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                //   disableRipple: true
            },
            styleOverrides: {
                root: ({ theme }) => ({
                    textTransform: 'uppercase',
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: 16
                }),
                outlined: {
                    borderRadius: 0,
                    borderWidth: 1,
                },


            }
        },
        MuiCssBaseline: {
            styleOverrides: (theme) => ({
                body: {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    fontFamily: theme.typography.fontFamily,
                    transition: 'all 0.25s linear',
                    '&::-webkit-scrollbar': {
                        width: 8,
                        backgroundColor: theme.palette.background.default,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 10,
                    },
                },
            }),
        },


    },

});

export default lightTheme;