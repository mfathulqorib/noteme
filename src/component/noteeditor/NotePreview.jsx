"use client";

import { useContext, useState } from "react";
import { NoteContext } from "../provider/NoteProvider";
import { NoteCard } from "./NoteCard";

export const NotePreview = () => {
  const { notes, email } = useContext(NoteContext);

  // const newData = [...notes];
  // const dataApi = dataNotes.filter(function ({ user }) {
  //   return user === "me@nuhafadh.com";
  // });
  // const dataApi = {
  //   additionalData: "",
  //   collectionId: "496u3oudwj80y8y",
  //   collectionName: "notes",
  //   content: "sdfsdfs",
  //   created: "2023-11-23 14:57:24.513Z",
  //   id: "taor13rhjs7sd7s",
  //   updated: "2023-11-23 14:57:24.513Z",
  //   user: "me@nuhafadh.com",
  // };
  // newData.push(dataApi);
  // console.log(newData);
  // newData.push(notes);
  // const newData = notes.push(data);

  return (
    <div className="grid grid-cols-2 gap-6">
      {notes.map(({ content, id }, index) => {
        return <NoteCard key={id} content={content} index={index} id={id} />;
      })}
    </div>
  );
};
