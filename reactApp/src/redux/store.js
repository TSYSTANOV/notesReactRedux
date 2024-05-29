import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./NotesSlice";

export const store = configureStore({
  reducer: {
    notes: NotesSlice,
  },
});
