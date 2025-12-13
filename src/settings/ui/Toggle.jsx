import React from "react";

// interface ToggleProps {
//   enabled: boolean;
//   onChange: (enabled: boolean) => void;
// }

export const Toggle = ({ enabled, onChange }) => {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        enabled ? "bg-indigo-600" : "bg-gray-200"
      }`}
    >
      <span className="sr-only">Enable 2FA</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out shadow-sm`}
      />
    </button>
  );
};
