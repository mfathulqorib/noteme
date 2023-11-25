"use client";

import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import { fetchNotes, deleteNoteAPI, createNoteAPI, updateNoteAPI } from "@/api/notes";

export const NoteContext = createContext();

export const NoteProvider = ({ children, datapi }) => { 

  // 1. Component Did Mount
  // useEffect(() => {
  //    function()
  // }, [])
  // Mounted 
  // 2. Component Did Update
  // useEffect(() => {
  //    function()
  // }, [email, notes])
  // After updated
  // 3. Component Will Unmount
  // useEffect(() => {
  // return (() => {
  //    })
  // })
  // Hello fahrul.razix@gmail.com

  // useState

  const [notes, setNotes] = useState([]);
  // notes harus immutable / read only
  const [email, setEmail] = useState("");
  const router = useRouter();

  const getDataFromAPI = async () => { 
    const result = await fetchNotes()
    setNotes([...result])  
  }

  const setEmailToLocalStorage = () => {
    const email = localStorage.getItem("email");
    setEmail(email);
  }
  
  useEffect(() => {
    getDataFromAPI()
    setEmailToLocalStorage() 
    // const data = localStorage.getItem("notes");
    // const currentNotes = JSON.parse(data);
    // setNotes(currentNotes ? currentNotes : []);
  }, [email]);

  async function addNote() {
    try {
      const newNoteData = {
        content: '',
        user: email ?? '',
        additionalData: ''
      }
      const newNote = await createNoteAPI(JSON.stringify(newNoteData))
      if (newNote) { 
        setNotes((currentNotes) => [newNote, ...currentNotes]) 
      }
    } catch (error) { } 
  }

  async function deleteNote(noteId) { 
    try {
      const isSuccess = await deleteNoteAPI(noteId)
      if (isSuccess) {
        setNotes((currentNotes) => {
          const newNotes = [...currentNotes] 
          const deletedIndex = newNotes.findIndex(n => n.id === noteId) 
          if (deletedIndex !== -1) {
            newNotes.splice(deletedIndex, 1);
          }
          return newNotes
        })
      } else {
        console.log('Fail to delete, note id = ', noteId)
      }
    } catch (error) { }
  }

  function changeContent(noteId, newContent) {
    const newNoteData = {
      content: newContent,
      user: email ?? '',
      additionalData: ''
    }
    updateNoteAPI(noteId, JSON.stringify(newNoteData))
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
