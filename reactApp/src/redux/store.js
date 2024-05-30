import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import NotesSlice from "./NotesSlice";

const localStorageMiddleware = (store) => (next) => (action)=>{
  const nextAction = next(action)
  if(action.type === 'notes/addNote' || action.type === 'notes/deleteNote'){
    localStorage.setItem('notes',JSON.stringify(store.getState().notes.notes))
  }
  return nextAction
}


export const store = configureStore({
  reducer: {
    notes: NotesSlice,
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(localStorageMiddleware)
  }
});

