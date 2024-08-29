import React from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    const value = input.value;
    if (!value) {
      return toast.error("This didn't work.");
    }
    onSubmit(value);
  };

  return (
    <form className={s.searchForm} onSubmit={formSubmit}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};
