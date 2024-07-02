import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, { error }) => {
  state.loading = false;
  state.error = error.message;
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, handleRejected),
});

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const contactsReducer = contactSlice.reducer;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
