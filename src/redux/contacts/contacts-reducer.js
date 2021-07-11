import { combineReducers } from "redux";
import contactActions from "./contacts-actions";
import { createReducer } from "@reduxjs/toolkit";
import initialContacts from "../../data/contacts.json";

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
const items = createReducer(initialContacts, {
  [contactActions.addContact]: (state, { payload }) => [...state, payload],
  [contactActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer("", {
  [contactActions.resetFilter]: (_, { payload }) => payload,
});

// const filter = (state = "", { type, payload }) => {
//     switch (type) {
//         case "contacts/resetFilter":
//             return payload

//         default:
//             return state
//     }
// }
// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case actionTypes.ADD:
//             return [...state, payload]

//         case actionTypes.DELETE:
//             return state.filter(({ id }) => id !== payload)

//         default:
//             return state
//     }
// }

export default combineReducers({
  items,
  filter,
});
