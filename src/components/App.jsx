import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container.styled';
import Section from './Section/Section';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <PhonebookForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Contacts options={this.state.contacts} />
        </Section>
      </Container>
    );
  }
}
