"use client";

import { useContext, useState } from "react";
import { NoteContext } from "../provider/NoteProvider";

export const Login = () => {
  const { getEmail, router } = useContext(NoteContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    router.push("/noteapp");
  };

  return (
    <>
      <form
        className="flex flex-col m-auto gap-y-3"
        onSubmit={handleFormSubmit}
      >
        <label className="border-2 select-none text-center" htmlFor="email">
          Masukan email anda :)
        </label>
        <input
          required
          className="border-2"
          type="email"
          id="email"
          name="email"
          onChange={(e) => getEmail(e.target.value)}
        ></input>
        <button className="border-2" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
