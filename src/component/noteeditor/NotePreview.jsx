"use client";

import { useContext } from "react";
import { NoteContext } from "../provider/NoteProvider";
import { NoteCard } from "./NoteCard";

export const NotePreview = () => {
  const { notes } = useContext(NoteContext);

  return (
    <div className="grid grid-cols-2 gap-6">
      {notes.map(({ body }, index) => {
        return (
          <div>
            <NoteCard content={body} index={index} />
          </div>
        );
      })}
    </div>
  );
};
