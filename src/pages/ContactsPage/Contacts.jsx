import { ContactListTitle, Container, Title } from 'components/App/App.styled';
import ContactsList from 'components/Contact__List/Contact__List';
import { SetError } from 'components/Error/Error';
import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Title>My Phonebook</Title>
        <Form />
        <ContactListTitle> My contacts list</ContactListTitle>
        <Filter />
        <ContactsList />
        <SetError />
      </Container>
    </>
  );
};

export default ContactsPage;
