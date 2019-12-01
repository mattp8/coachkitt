import { theme as defaultTheme } from 'chakra'

const theme = {
    colors: {
        ...defaultTheme.colors,
        black: '#131212',
        black400: '#282626',
        black300: '#404040',
        text: '#404040',
        black200: '#5B5858',
        primary: '#CD6C51',
        red: '#CD6C51',
        offwhite: '#F7F3EF'
    },
    fonts: {
        body: '"Montserrat",  Helvetica, sans-serif',
        heading: '"Montserrat", Helvetica-Neue, sans-serif',
        code: 'Menlo, monospace'
    },
    fontSizes: {
        tiny: '12px',
        small: '14px',
        body: '18px',
        subtitle: '21px',
        heading1: '20px',
        heading2: '32px',
        heading3: '40px',
        display1: '48px',
        display2: '54px',
        display3: '64px'
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
    },
    lineHeights: {
        normal: 'normal',
        shorter: '1.25',
        short: '1.375',
        base: '1.5',
        tall: '1.625',
        taller: '2'
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '2px',
        wider: '4px',
        widest: '5px'
    },
    radii: {
        small: '4px',
        normal: '8px',
        medium: '12px',
        large: '16px',
        rounded: '9999px'
    },

    elevation: {
        1: '0px 17.6233px 26.4349px rgba(0, 0, 0, 0.08)',
        2: '0px 20px 30px rgba(0, 0, 0, 0.08)',
        3: '0px 20px 60px rgba(0, 0, 0, 0.16);'
    },

    shadows: {
        el100: '0px 2px 12px rgba(29, 25, 25, 0.04)'
    },

    breakpoints: ['30em', '48em', '62em', '80em']
}

export default theme
