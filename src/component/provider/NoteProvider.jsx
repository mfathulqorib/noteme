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

  // Function to store email data from input user
  const setEmailToLocalStorage = () => {
    const email = localStorage.getItem("email");
    setEmail(email);
  };

  // Function to read data from API filtered by email
  const getDataFromAPI = async () => {
    const result = await fetchNotes();
    setNotes([...result]);
  };

  // Function to reinvoke read data from API filtered by email, based on email change
  useEffect(() => {
    getDataFromAPI();
    setEmailToLocalStorage();
  }, [email]);

  // Function to create note and POST to API
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

  // Function to change note and PATCH to API
  function changeContent(noteId, newContent) {
    const newNoteData = {
      content: newContent,
      user: email ?? "",
      additionalData: "",
    };
    updateNoteAPI(noteId, JSON.stringify(newNoteData));
  }

  // Function to delete note and DELETE to API
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

  // Function to store email information from user's input to local storage
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
