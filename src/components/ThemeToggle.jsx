import React from 'react';

export default function ThemeToggle({isDark,onToggle}){
  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={onToggle}
      aria-pressed={isDark}
      title={isDark?"Aydınlık moda geç":"Karanlık moda geç"}
    >
      {isDark?"☀️ Aydınlık":"🌙 Karanlık"}
    </button>
  );
}