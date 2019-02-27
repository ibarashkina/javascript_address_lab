// // When the user chooses to add, prompt them for the four contact properties
// // and call the AddressBook’s add method to add the new contact.
// // b. When the user chooses to delete, prompt them for the index of the contact and
// // call the AddressBook’s deleteAt method to remove the contact.
// // c. When the user chooses to print, call the AddressBook’s print method.
// // d. When the user chooses to quit, end the program.


"use strict"

class AddressBook {
constructor(contacts) {
  this.contacts = contacts;
} 


add(info) {
  this.contacts.push(info);
}

print () {
    console.log(this.contacts);
}

deleteAt(index) {
  this.contacts.splice(index,1);
}

}

class Contact {
  constructor (name,email,phone,relation) {
this.name = name;
this.email = email;
this.phone = phone;
this.relation = relation;
  }
}
const items = new AddressBook ([new Contact('John','john.smith@gmail.com','734-505-2244','friend')]);
  
while(true) {
let user = prompt("Would you like to add, print, delete, or quit?");

if (user === 'quit') {
    break;
}

if (user === 'print') {
    items.print();
}

if (user === 'add') {
    let userName = prompt('What is the name?');
    let email = prompt(`What is the email of ${userName}?`);
    let phone = prompt(`What is the phone number of ${userName}?`);
    let relation = prompt(`What is the relation of ${userName}?`);

    let info = new Contact(name,email,phone,relation);
    items.add(info);
}
if (user === 'delete') {
    let index = prompt("What index would you like to delete?");
    items.deleteAt(index);

}
}





