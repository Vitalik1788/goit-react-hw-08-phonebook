import { useDispatch } from 'react-redux';
import { RegForm, FormLabel } from './LogIn.styled';
import { login } from 'redux/auth/auth-operation';

const LogInPage = () => {
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  }

  return (
    <>
      <RegForm onSubmit={handlesubmit} autoComplete="off">
        <FormLabel>
          Email
          <input type="email" name="email" placeholder="Enter your email" />
        </FormLabel>
        <FormLabel>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </FormLabel>
        <button type="submit">Log In</button>
      </RegForm>
    </>
  );
};

export default LogInPage;
