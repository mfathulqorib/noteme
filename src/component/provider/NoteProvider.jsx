"use client";

import React, { createContext, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  function addNote() {
    const newNotes = [...notes];
    const newNote = {
      body: "",
    };
    newNotes.push(newNote);
    setNotes(newNotes);
  }

  function deleteNote(index) {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  }

  function changeContent(index, newContent) {
    const newNotes = [...notes];
    const newNote = {
      body: newContent,
    };
    newNotes.splice(index, 1, newNote);
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, changeContent }}>
      {children}
    </NoteContext.Provider>
  );
};
