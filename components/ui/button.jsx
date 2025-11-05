import React from "react";

export function Button({ children, asChild, variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-all duration-200";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline:
      "border border-gray-500 text-gray-200 hover:bg-gray-700 hover:text-white",
  };

  const Comp = asChild ? "span" : "button";
  return (
    <Comp className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </Comp>
  );
}
