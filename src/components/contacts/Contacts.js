import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: 'John Doe',
  //         email: 'jdoe@gmail.com',
  //         phone: '555-555-555'
  //       },
  //       {
  //         id: 2,
  //         name: 'Karen Wiliams',
  //         email: 'kwilliams@gmail.com',
  //         phone: '555-222-522'
  //       },
  //       {
  //         id: 3,
  //         name: 'Henry Johnson',
  //         email: 'hjohnson@gmail.com',
  //         phone: '115-121-115'
  //       }
  //     ]
  //   };
  // }

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
