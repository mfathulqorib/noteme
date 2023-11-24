"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [email, setEmail] = useState("");
  const router = useRouter();

  function addNote() {
    const newNotes = [...notes];
    const newNote = {
      user: "",
      content: email ? email : "",
      additionalData: "",
    };
    newNotes.push(newNote);
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
      content: newContent,
    };
    newNotes.splice(index, 1, newNote);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function getEmail(val) {
    setEmail(val);
    localStorage.setItem("email", val);
  }

  useEffect(() => {
    const data = localStorage.getItem("notes");
    const currentNotes = JSON.parse(data);
    const email = localStorage.getItem("email");
    setNotes(currentNotes ? currentNotes : []);
    setEmail(email);
  }, []);

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        changeContent,
        getEmail,
        email,
        router,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
