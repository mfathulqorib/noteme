"use client";

import React, { useContext } from "react";
import { Plus } from "lucide-react";
import { NoteContext } from "../provider/NoteProvider";

export const NoteHeader = () => {
  const { addNote } = useContext(NoteContext);

  return (
    <div className="flex justify-between py-6">
      <div>Noteme.</div>
      <div>
        <Plus onClick={addNote} />
      </div>
    </div>
  );
};
