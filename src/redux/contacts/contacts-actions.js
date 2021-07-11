import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const deleteContact = createAction("contacts/delete");

const resetFilter = createAction("contacts/resetFilter");

const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const contactActions = { addContact, deleteContact, resetFilter };
export default contactActions;

// const addContact = ({ name, number }) => ({
//     type: actionTypes.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     },
// })

// const deleteContact = (contactId) => ({
//     type: actionTypes.DELETE,
//     payload: contactId,
// })

// const resetFilter = (value) => ({
//     type: actionTypes.RESET_FILTER,
//     payload: value,
// })
