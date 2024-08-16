import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useState, ChangeEvent, FormEvent } from "react";
import React, { FC } from "react";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput.trim() === "") {
      toast.error("Enter the text to search");
    } else {
      onSubmit(userInput);
      setUserInput("");
    }
  };

  return (
    <header className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          value={userInput}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
