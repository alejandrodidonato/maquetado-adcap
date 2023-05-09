import { createTheme } from "@mui/material/styles";

const appTheme = createTheme({
    typography: {
        h1: {
          fontFamily: 'Open Sans',
          fontSize: '41px',
          fontWeight: 400,
        },
        h2: {
          fontFamily: 'Open Sans',
          fontSize: '40px',
          fontWeight: 600,
          letterSpacing: -0.5
        },
        h3: {
          fontFamily: 'Open Sans',
          fontSize: '36px',
          fontWeight: 600,
        },
        h4: {
          fontFamily: 'Open Sans',
          fontSize: '36px',
          fontWeight: 600,
        },
        h5: {
          fontFamily: 'Open Sans',
          fontSize: '24px',
          fontWeight: 600,
        },
        h6: {
          fontFamily: 'Open Sans',
          fontSize: '20px',
          fontWeight: 500,
          letterSpacing: 0.15
        },
        subtitle1: {
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: 0.15
          },
        body1: {
          fontFamily: 'Roboto',
          fontSize: '14px',
          fontWeight: 400,
          letterSpacing: 0.15
        },
        caption: {
          fontFamily: 'Roboto',
          fontSize: '12px',
          fontWeight: 400,
          letterSpacing: 0.4
        }
      },
      palette: {
        primary: {
            main: '#D4415B',
            dark: '#79053D',
            light: '#E07A8D',
            background: '#DEBAC1',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#C13DAC',
            dark: '#862576',
            light: '#EA8DDB',
            background: '#E8B9E0'
        }
      },
    components: {
            MuiContainer: {
                styleOverrides: {
                    root: {
                        maxWidth: '1400px'
                    }
                    
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        color: '#000000',
                        fontFamily: 'Roboto',
                        fontSize: '15px',
                        fontWeight: 500,
                        letterSpacing: 0.46,
                        padding: '0',
                        '&:hover': {
                            background: 'transparent'
                        }
                    }
                    
                }
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        border: 'none',
                        textAlign: 'left',
                    },
                    body: {
                        color: 'gray'
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        minWidth: '357px'
                    }
                }
            },
            MuiTab: {
              styleOverrides: {
                  root: {
                      width: '20%',
                      paddingBottom: '25px',
                      textTransform: 'none'
                  }
              }
          },
          MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: '0px'
                }
            }
        },
    
    }
});

export default appTheme;