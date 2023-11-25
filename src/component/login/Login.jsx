"use client";

import { useContext } from "react";
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
        className="flex flex-col m-auto gap-y-1 justify-center h-[100vh] max-w-xl"
        onSubmit={handleFormSubmit}
      >
        <label
          className=" select-none mb-20 text-[#264653] text-[6rem] font-bold"
          htmlFor="email"
        >
          Noteme.
        </label>
        <input
          required
          className="border-2 py-2 px-4 rounded-lg focus:outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="Please enter your email..."
          onChange={(e) => getEmail(e.target.value)}
        ></input>
        <button
          className="border-2 bg-[#2a9d8f] hover:bg-[#238c7f] text-white py-1 px-2 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};
