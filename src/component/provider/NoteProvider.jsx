"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import {
  fetchNotes,
  deleteNoteAPI,
  createNoteAPI,
  updateNoteAPI,
} from "@/api/notes";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const getDataFromAPI = async () => {
    const result = await fetchNotes();
    setNotes([...result]);
  };

  const setEmailToLocalStorage = () => {
    const email = localStorage.getItem("email");
    setEmail(email);
  };

  useEffect(() => {
    getDataFromAPI();
    setEmailToLocalStorage();
  }, [email]);

  async function addNote() {
    try {
      const newNoteData = {
        content: "",
        user: email ?? "",
        additionalData: "",
      };
      const newNote = await createNoteAPI(JSON.stringify(newNoteData));
      if (newNote) {
        setNotes((currentNotes) => [newNote, ...currentNotes]);
      }
    } catch (error) {}
  }

  async function deleteNote(noteId) {
    try {
      const isSuccess = await deleteNoteAPI(noteId);
      if (isSuccess) {
        setNotes((currentNotes) => {
          const newNotes = [...currentNotes];
          const deletedIndex = newNotes.findIndex((n) => n.id === noteId);
          if (deletedIndex !== -1) {
            newNotes.splice(deletedIndex, 1);
          }
          return newNotes;
        });
      } else {
        console.log("Fail to delete, note id = ", noteId);
      }
    } catch (error) {}
  }

  function changeContent(noteId, newContent) {
    const newNoteData = {
      content: newContent,
      user: email ?? "",
      additionalData: "",
    };
    updateNoteAPI(noteId, JSON.stringify(newNoteData));
  }

  function getEmail(val) {
    setEmail(val);
    localStorage.setItem("email", val);
  }

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
