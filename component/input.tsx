"use client";

import React, { useState } from "react";
import Button from "./button";


const Input: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Searching for: " + query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center rounded-lg shadow border border-red-500 text-black p-3 w-full max-w-2xl h-auto mx-auto"
    >
      <input
        type="text"
        placeholder="info@gmail.com"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow outline-none px-3 text-red-500 bg-transparent placeholder:text-red-500"
      />

      <Button
        className="ml-2 w-[78px] h-[52px] btn-primary text-white font-medium flex items-center justify-center"
        icon="lets-icons:send-light"
        iconWidth={32}
        iconHeight={32}
        type="submit"
        // ariaLabel="Send email"
      />
    </form>
  );
};

export default Input;
        