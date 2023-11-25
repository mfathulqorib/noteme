"use client";

import { useContext, useState } from "react";
import { NoteContext } from "../provider/NoteProvider";
import { NoteCard } from "./NoteCard";
import { Plus } from "lucide-react";

export const NotePreview = () => {
  const { notes, addNote } = useContext(NoteContext);

  if (notes.length === 0) {
    return (
      <div className="h-[83.7vh] max-h-max w-full">
        <div className="w-max mx-auto py-[12em]">
          <button
            className=" text-gray-400 mx-auto hover:bg-orange-400 hover:text-white py-3 px-4 rounded-lg border-[3pt] border-dashed border-orange-400"
            onClick={addNote}
          >
            <div className="text-sm flex gap-1 justify-around items-center">
              Add note <Plus size={20} />
            </div>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-[83.7vh]">
        <div className="max-h-[83.7vh]  w-full flex flex-col gap-6 overflow-y-auto custom-scrollbar pl-3 pr-4 pb-4 md:grid md:grid-cols-2  xl:grid xl:grid-cols-3 ">
          {notes.map(({ content, id }, index) => {
            return (
              <NoteCard key={id} content={content} index={index} id={id} />
            );
          })}
        </div>
      </div>
    );
  }
};
