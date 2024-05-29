import { createSlice } from "@reduxjs/toolkit";

const NotesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    alert: false,
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((el) => el.id !== action.payload);
    },
    setAlert: (state) => {
      state.alert = true;
    },
    removeAlert: (state) => {
      state.alert = false;
    },
  },
});
export const { addNote, removeAlert, setAlert, deleteNote } =
  NotesSlice.actions;
export default NotesSlice.reducer;
