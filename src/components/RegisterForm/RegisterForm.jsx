import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import Box from '@mui/material/Box';
import { LinkAuth } from 'components/Navigation/Navigation.styled';
import { InputAuth } from 'components/Navigation/Navigation.styled';
import { ButtonAuth } from 'components/Navigation/Navigation.styled';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
        <p>Create a new user</p>
        <InputAuth
          size="small"
          label="Name"
          helperText="Please enter your name"
          type="text"
          name="name"
        />
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
          helperText="Сreate your own password"
          type="password"
          name="password"
        />
        <ButtonAuth variant="outlined" color="secondary" type="submit" size="small">
          Register
        </ButtonAuth>
        <LinkAuth to="/login">Have an account? Click me )</LinkAuth>
      </Box>
    </Box>
  );
};
