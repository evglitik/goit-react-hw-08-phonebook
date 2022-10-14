import { createTheme } from '@mui/material/styles';
import { teal, blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      light: teal[200],
      main: teal[500],
      dark: teal[700],
      contrastText: teal[900],
    },
    secondary: {
      light: blueGrey[50],
      main: blueGrey[100],
      dark: blueGrey[200],
      contrastText: blueGrey[300],
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#009688',
      // bgcol
      main: '#e0f2f1',
      // text
      dark: '#018374',
      contrastText: '#455a64',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});



// export const theme = {
//   colors: {
//     black: '#000',
//     white: '#fff',
//     light: '#FFF9FF',
//     grey: '#808080',
//     darckGrey: '#696969',
//     background: '#f3f6f9',
//     secondary: '#e4ebeb',
//     online: '#BE991E',
//     ofline: '#EB001E',
//     docx: '#4FC7F7',
//     pdf: '#A33CF5',
//     mp3: '#E64C64',
//     psd: '#1FB8C6',
//     tableHead: '#00BCD5',
//     tableRows: '#ECF1F4',
//     tableBorderDarck: '#E4E4E4',
//     tableBorderLight: '#8FFFFF',
//   },
//   space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
//   fonts: {
//     body: 'system-ui, sans-serif',
//     heading: 'system-ui, sans-serif',
//     monospace: 'Menlo, monospace',
//   },
//   fontSizes: {
//     xs: '12px',
//     s: '14px',
//     m: '16px',
//     ml: '24px',
//     l: '32px',
//   },
//   fontWeights: {
//     normal: 400,
//     medium: 500,
//     bold: 700,
//   },
//   lineHeights: {
//     body: 1.5,
//     heading: 1.125,
//   },
//   borders: {
//     none: 'none',
//     normal: '1px solid',
//   },
//   radii: {
//     none: '0',
//     normal: '2px',
//     medium: '4px',
//     round: '50%',
//   },
//   shadows: {
//     shadow: '1px 2px 5px 1px rgba(0, 0, 0, 0.35)',
//   },
// };
