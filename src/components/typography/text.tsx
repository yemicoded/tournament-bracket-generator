import React from "react";

export interface ITypography<E> {
  as?: E;
  className?: string;
  fontWeight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
}

export default function Text<E extends React.ComponentProps<"p">>({
  as,
  children,
  className,
  fontWeight = "normal",
  ...rest
}: ITypography<E> & Omit<React.ComponentProps<E>, keyof ITypography<E>>) {
  const Element = as || "p";
  return (
    <Element
      {...rest}
      className={`font-montserrat font-${fontWeight} ${className}`}
    >
      {children}
    </Element>
  );
}
