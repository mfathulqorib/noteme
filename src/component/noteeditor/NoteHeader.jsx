"use client";

import React, { useContext } from "react";
import { Plus, LogOut, Smile } from "lucide-react";
import { NoteContext } from "../provider/NoteProvider";

export const NoteHeader = () => {
  const { addNote, router, email } = useContext(NoteContext);

  return (
    <header className="text-[#2a9d8f] sticky top-0 z-10 select-none px-3 ">
      <div className="flex justify-between pt-2 pb-4">
        <div className="flex flex-col gap-y-1">
          <div className=" font-semibold text-xl ">Noteme.</div>
          <h3 className="text-[0.8rem] flex gap-x-1 items-center">
            {`Hello ${email}`}
            <span>
              <Smile size={12} />
            </span>
          </h3>
        </div>
        <div className="flex gap-x-3">
          <button
            onClick={addNote}
            className="cursor-pointer hover:text-[#264653] focus:outline-none flex gap-1 items-center"
          >
            <span className="hidden md:inline">Add note</span>
            <Plus size={20} />
          </button>
          <button className="focus:outline-none">
            <LogOut
              className="cursor-pointer hover:text-[#264653]"
              onClick={() => router.push("/")}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
