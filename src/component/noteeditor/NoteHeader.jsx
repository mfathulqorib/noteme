"use client";

import React, { useContext } from "react";
import { Plus, LogOut, Smile } from "lucide-react";
import { NoteContext } from "../provider/NoteProvider";

export const NoteHeader = () => {
  const { addNote, router, email } = useContext(NoteContext);

  return (
    <header className="sticky top-0 z-10 bg-white select-none">
      <div className="flex justify-between py-6">
        <div className="flex flex-col gap-y-1">
          <div>Noteme.</div>
          <h3 className="text-xs flex gap-x-1 items-center">
            {`Hello ${email}`}
            <span>
              <Smile size={10} />
            </span>
          </h3>
        </div>
        <div className="flex gap-x-3">
          <button>
            <Plus
              className="cursor-pointer hover:text-indigo-600"
              onClick={addNote}
            />
          </button>
          <button>
            <LogOut
              className="cursor-pointer hover:text-indigo-600"
              onClick={() => router.push("/")}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
