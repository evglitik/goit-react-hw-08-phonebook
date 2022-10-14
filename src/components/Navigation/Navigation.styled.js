import { NavLink } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const Header = styled(AppBar)(({ theme }) => ({
  height: '60px',
  color: theme.palette.secondary.light,
  backgroundColor: theme.palette.primary.contrastText,
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px 12px',
}));

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  font: inherit;
  font-size: 20px;
  font-weight: 500;

  &.active {
    color: #fffde7;
  }
`;

export const AccordionContainer = styled(Accordion)(({ theme }) => ({
  color: theme.palette.secondary.light,
  backgroundColor: '#018374',
}));

export const LinkAuth = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  text-align: center;

  &:hover {
    color: #fffde7;
  }
`;

export const InputAuth = styled(TextField)({
  color: '#e0f2f1',
  input: {
    color: '#e0f2f1',
  },
  label: {
    color: '#eceff1',
  },
  p: {
    color: '#eceff1',
  },
  '& label.Mui-focused': {
    color: '#e0f2f1',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#e0f2f1',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#b0bec5',
    },
    '&:hover fieldset': {
      borderColor: '#e0f2f1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#e0f2f1',
    },
  },
});

export const ButtonAuth = styled(Button)(({ theme }) => ({
  '&:hover': {
    color: '#ffffff',
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

export const ButtonAuthOut = styled(Button)(({ theme }) => ({
  '&:hover': {
    color: '#ffffff',
    backgroundColor: theme.palette.primary.main,
  },
}));

export const ContactButtonDelet = styled(IconButton)(({ theme }) => ({
  color: '#ececec8a',
  '&:hover': {
    color: '#ff5a5a',
    backgroundColor: '#ff000036',
  },
}));