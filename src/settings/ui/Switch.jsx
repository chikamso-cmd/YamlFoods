import React from "react";

// interface SwitchProps {
//   checked: boolean;
//   onChange: (checked: boolean) => void;
//   className?: string;
// }

export const Switch = ({
  checked,
  onChange,
  className = "",
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`
        relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 
        focus-visible:ring-green-600 focus-visible:ring-offset-2
        ${checked ? "bg-green-500" : "bg-gray-300"}
        ${className}
      `}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`
          pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 
          transition duration-200 ease-in-out
          ${checked ? "translate-x-5" : "translate-x-0"}
        `}
      />
    </button>
  );
};
