"use client";

import React, { useContext } from "react";
import { Plus } from "lucide-react";
import { NoteContext } from "../provider/NoteProvider";

export const NoteHeader = () => {
  const { addNote } = useContext(NoteContext);

  return (
    <div className="flex justify-between py-6">
      <div>Noteme.</div>
      <button>
        <Plus
          className="cursor-pointer hover:text-indigo-600"
          onClick={addNote}
        />
      </button>
    </div>
  );
};
