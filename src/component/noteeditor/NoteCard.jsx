"use client";

import { NoteContext } from "../provider/NoteProvider";
import { useContext, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

export const NoteCard = ({ content, index, id }) => {
  const [input, setInput] = useState(content);
  const { deleteNote, changeContent } = useContext(NoteContext);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (content !== input) {
      // If Notes.content !== input, invoke debounce func
      processChange(input);
    }
    return () => {
      processChange.cancel(); // Cleanup the debounced func
    };
  }, [input]);

  function changeNote(input) {
    changeContent(id, input);
  }

  // With debounce, func will invoke after 500ms after last trigger
  const processChange = useMemo(() => debounce(changeNote, 500), []);

  return (
    <div>
      <textarea
        onChange={handleChange}
        className="w-full bg-[#f4a261] hover:bg-[#f2be94] text-black focus:outline-none p-3 text-sm rounded-lg resize-none placeholder:text-white placeholder:font-medium font-medium"
        rows={6}
        value={input}
        placeholder="Make a note..."
        key={`txt${index}`}
      ></textarea>
      <button
        className="bg-red-500 text-white text-sm mt-1 py-2 px-4 font-medium rounded-lg hover:bg-rose-600 select-none "
        onClick={() => deleteNote(id)}
        key={`btn${index}`}
      >
        Delete
      </button>
    </div>
  );
};
