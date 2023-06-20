import { useDispatch } from 'react-redux';
import { RegForm, FormLabel, LoginInput, LoginButton } from './LogIn.styled';
import { login } from 'redux/auth/auth-operation';

const LogInPage = () => {
  const dispatch = useDispatch();

  const handlesubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <RegForm onSubmit={handlesubmit} autoComplete="off">
        <FormLabel>
          <LoginInput
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </FormLabel>
        <FormLabel>
          <LoginInput
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </FormLabel>
        <LoginButton variant="contained" type="submit">Log In</LoginButton>
      </RegForm>
    </>
  );
};

export default LogInPage;
