const argv = require('yargs').argv;
const contactsHandlers = require('./contacts') ;

function invokeAction({ action, id, name, email, phone }) {

  switch (action) {
    case 'list':
      contactsHandlers.listContacts()
      break;

    case 'get':
      contactsHandlers.getContactById(id)
      break;

    case 'add':
      contactsHandlers.addContact(name,email,phone)
      break;

    case 'remove':
      contactsHandlers.removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);