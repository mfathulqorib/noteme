"use client";

import { NoteContext } from "../provider/NoteProvider";
import { useContext } from "react";

export const NoteCard = ({ content, index }) => {
  const { deleteNote, changeContent } = useContext(NoteContext);

  return (
    <div>
      <textarea
        onChange={(e) => changeContent(index, e.target.value)}
        className="w-full bg-yellow-400 text-black focus:outline-none p-4 text-xs rounded-lg resize-none"
        rows={6}
        value={content}
      ></textarea>
      <button
        className="bg-rose-500 text-white text-xs p-2 font-medium rounded-lg hover:bg-rose-600"
        onClick={() => deleteNote(index)}
      >
        Delete
      </button>
    </div>
  );
};
