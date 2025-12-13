import React from "react";

// interface IconWrapperProps {
//   children: React.ReactNode;
//   className?: string;
// }

export const IconWrapper = ({
  children,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
};
