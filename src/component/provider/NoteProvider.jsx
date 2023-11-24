"use client";

import React, { createContext, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  function addNote() {
    const newNotes = [...notes];
    const newNote = {
      body: "",
    };
    newNotes.unshift(newNote);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function deleteNote(index) {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function changeContent(index, newContent) {
    const newNotes = [...notes];
    const newNote = {
      body: newContent,
    };
    newNotes.splice(index, 1, newNote);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  useState(() => {
    const data = localStorage.getItem("notes");
    const currentNotes = JSON.parse(data);
    setNotes(currentNotes);
  }, []);
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, changeContent }}>
      {children}
    </NoteContext.Provider>
  );
};
