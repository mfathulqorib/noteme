"use client";

import { useContext, useState } from "react";
import { NoteContext } from "../provider/NoteProvider";
import { NoteCard } from "./NoteCard";

export const NotePreview = () => {
  const { notes } = useContext(NoteContext);

  return (
    <div className="grid grid-cols-2 gap-6">
      {notes.map(({ content }, index) => {
        return <NoteCard key={index} content={content} index={index} />;
      })}
    </div>
  );
};
