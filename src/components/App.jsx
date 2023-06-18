import { Container } from './App/App.styled';



import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Homepage from 'pages/HomePage/Homepage';
import RegisterForm from 'pages/Register/Register';
import LogInPage from 'pages/Login/LogIn';
import ContactsPage from 'pages/ContactsPage/Contacts';

const App = () => { 

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LogInPage />} />
          <Route path='contacts' element={<ContactsPage />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
