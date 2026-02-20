"use client";

import React, { useState } from 'react';

export interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  defaultValue?: string;
  className?: string;
}

/**
 * SearchBar Component
 * Large prominent search input for homepage/directory pages
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Botox, Lippen, Hautarzt...",
  onSearch,
  defaultValue = "",
  className = ""
}) => {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="form-input w-full py-4 px-6 pr-32 text-lg rounded-xl shadow-lg"
      />
      <button
        type="submit"
        className="btn absolute right-2 top-1/2 -translate-y-1/2 bg-linear-to-t from-blue-600 to-blue-500 text-white"
      >
        Suchen
      </button>
    </form>
  );
};
