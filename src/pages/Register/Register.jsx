import { useDispatch } from 'react-redux';
import { FormLabel, RegForm, RegisterButton, RegisterInput } from './Register.styled';
import { register } from 'redux/auth/auth-operation';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
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


  }


  return (
    <>
      <RegForm onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          <RegisterInput
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </FormLabel>
        <FormLabel>
          <RegisterInput
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </FormLabel>
        <FormLabel>
          <RegisterInput
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </FormLabel>
        <RegisterButton variant="contained" type="submit">
          Create account
        </RegisterButton>
      </RegForm>
    </>
  );
};

export default RegisterForm;
