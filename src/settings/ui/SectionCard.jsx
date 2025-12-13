import React from "react";

// interface SectionCardProps {
//   children: React.ReactNode;
//   className?: string;
// }

export const SectionCard = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 p-5 ${className}`}
    >
      {children}
    </div>
  );
};
