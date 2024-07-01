import { createSlice } from "@reduxjs/toolkit";
import baseContacts from "../data.json";

const contactSlice = createSlice({
  name: "contacts",
  initialState: { items: [...baseContacts] },
  // or
  // initialState: { items: [] },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id !== payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
