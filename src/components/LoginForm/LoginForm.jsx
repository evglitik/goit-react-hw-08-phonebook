import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import Box from '@mui/material/Box';
import { ButtonAuth } from 'components/Navigation/Navigation.styled';
import { LinkAuth } from 'components/Navigation/Navigation.styled';
import { InputAuth } from 'components/Navigation/Navigation.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <p>Authorization</p>
        <InputAuth
          size="small"
          label="Email"
          helperText="Please enter your email"
          type="email"
          name="email"
        />
        <InputAuth
          size="small"
          label="Password"
          helperText="Please enter your password"
          type="password"
          name="password"
        />
        <ButtonAuth variant="outlined" color="secondary" type="submit" size="small">
          Log In
        </ButtonAuth>
        <LinkAuth to="/register">Don't have account? Click me )</LinkAuth>
      </Box>
    </Box>
  );
};
