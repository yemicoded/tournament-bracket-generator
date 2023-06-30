"use client"
import { Text } from "components/typography";
import Link from "next/link";
import React from "react";
import classNames from 'classnames'

interface IButton extends React.ComponentProps<"button"> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  disabled?: boolean;
  fontWeight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  justify?: "start"|"end"|"center"
}

const UnstyledButton: React.FC<IButton> = ({
  className,
  onClick = () => {},
  iconLeft,
  iconRight,
  fontWeight,
  disabled,
  href = "",
  children,
  justify="center",
  ...rest
}) => {
  const classes = classNames("flex space-x-2 items-center", `justify-${justify}`, className);
  if (href) {
    return (
      <Link href={disabled ? "" : href}>
        <button {...rest} className={classes} disabled={disabled}>
          {iconLeft}
          <Text
            as='span'
            fontWeight={fontWeight}
            className='font-semibold text-[13px] lg:text-base'
          >
            {children}
          </Text>
          {iconRight}
        </button>
      </Link>
    );
  }
  return (
    <button
      {...rest}
      className={classes}
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {iconLeft}
      <Text
        as='span'
        fontWeight={fontWeight}
        className='font-semibold text-[13px] lg:text-base'
      >
        {children}
      </Text>
      {iconRight}
    </button>
  );
};

export default UnstyledButton;
