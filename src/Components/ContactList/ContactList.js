import React from "react";
import ContactItem from "../ContactItem";
import style from "./ContactList.module.css";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts/contacts-actions";

const ContactList = ({ contacts, removeContact }) => (
  <ul className={style.contact_list}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        id={id}
        key={id}
        name={name}
        number={number}
        removeContact={removeContact}
      />
    ))}
  </ul>
);

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;

  const filteredContacts = getFilteredContacts(items, filter);
  return {
    contacts: filteredContacts,
  };
};

// const mapStateToProps = ({ contacts: { contact, filter } }) => ({
//     contacts: getFilteredContacts(contact, filter),
// })

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
