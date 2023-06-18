import { useDispatch } from 'react-redux';
import { FormLabel, RegForm } from './Register.styled';
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
          Name
          <input type="text" name="name" placeholder="Enter your name" />
        </FormLabel>
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
        <button type="submit">Create your new Phonebook</button>
      </RegForm>
    </>
  );
};

export default RegisterForm;
