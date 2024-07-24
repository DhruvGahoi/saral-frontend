import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface TypeText {
    lighter: string;
  }
}

const AppThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = createTheme({
    palette: {
      common: {
        black: '#000',
        white: '#fff',
      },
      background: {
        default: '#F2F4F7',
      },
      text: {
        primary: '#1D2939',
        secondary: '#667085',
        lighter: '#98A2B3',
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'karla',
        lineHeight: 'normal',
      },
      h3: {
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: 'normal',
      },
      h4: {
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '18px',
        color: 'red',
      },
      body1: {
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '21px',
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            width: '340px',
            borderRadius: '8px',
            padding: '10px',
            boxShadow: '0px 0.5px 2px 0px #1018284D',
            background: '#FCFCFD',
            flexShrink: 0,
          },
        },
        variants: [
          {
            props: {
              variant: 'elevation'
            },
            style: {
              scale: 1.01,
              boxShadow: '0 0 20px black',
            }
          }
        ]
      },
      MuiButton: {
        styleOverrides: {
          root: {
            background: '#667085',
            padding: '10px',
            borderRadius: '15px',
            color: 'white',
            textTransform: 'capitalize',
            fontSize: '18px',
            '&:disabled': {
              opacity: 0.2,
            },
            '&:hover': {
              background: '#667085',
            },
          },
        },
        variants: [
          {
            props: {
              variant: 'text',
            },
            style: {
              background: 'none',
              color: '#667085',
              '&:hover': {
                background: 'none',
              },
            },
          },
        ],
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;