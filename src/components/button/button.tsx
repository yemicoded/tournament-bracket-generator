import { Container } from "components/container";
import { Text } from "components/typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import classNames from "classnames";

interface IButton extends React.ComponentProps<"button"> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  variant: "primary" | "secondary" | "none";
  disabled?: boolean;
  outlined?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<IButton> = ({
  className,
  iconLeft,
  iconRight,
  disabled,
  href = "",
  variant = "primary",
  outlined = false,
  children,
  isLoading,
  ...rest
}) => {
  const classes = classNames(
    "flex space-x-2 items-center justify-center duration-300 rounded-[9px]",
    {
      "py-[12px] lg:py-4 px-6 lg:px-8 bg-primary text-white border-2 border-primary hover:bg-primary/95":
        variant === "primary" && outlined === false,
    },
    {
      "py-[12px] lg:py-4 px-6 lg:px-8 bg-transparent border-2 border-primary text-primary hover:text-white hover:bg-primary/95":
        variant === "primary" && outlined,
    },
    {
      "py-[12px] lg:py-4 px-6 lg:px-8 bg-secondary text-primary border-2 border-secondary hover:bg-secondary/95":
        variant === "secondary",
    },
    // {
    //   "py-[12px] lg:py-4 px-6 lg:px-8 bg-primary text-white rounded-[9px] hover:bg-[#0A1E52]/95":
    //     variant === "primary",
    // },
    // {
    //   "py-[12px] lg:py-3 px-6 lg:px-8 bg-secondary text-white hover:bg-secondary/95":
    //     variant === "secondary",
    // },
    { "cursor-not-allowed": disabled },
    { "bg-primary/20 hover:bg-primary/20": disabled && variant === "primary" },
    {
      "bg-secondary/20 hover:bg-secondary/20":
        disabled && variant === "secondary",
    },
    { className: variant === "none" },
    className
  );
  if (href) {
    if (isLoading) {
      return (
        <button {...rest} className={classes} disabled>
          <Container className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <Image
              src="/assets/icons/loader.gif"
              width={20}
              height={20}
              alt="Loading..."
              className="w-full h-full"
            />
          </Container>
        </button>
      );
    }
    return (
      <Link href={disabled ? "" : href}>
        <button {...rest} className={classes} disabled={disabled}>
          {iconLeft}
          <Text as="span" className="font-semibold text-[13px] lg:text-base">
            {children}
          </Text>
          {iconRight}
        </button>
      </Link>
    );
  }
  if (isLoading) {
    return (
      <button {...rest} className={classes} disabled>
        <Container className="w-[30px] h-[30px] rounded-full overflow-hidden">
          <Image
            src="/assets/icons/loader.gif"
            width={20}
            height={20}
            alt="Loading..."
            className="w-full h-full"
          />
        </Container>
      </button>
    );
  }
  return (
    <button {...rest} className={classes} disabled={disabled}>
      {iconLeft}
      <Text as="span" className="font-semibold text-[13px] lg:text-base">
        {children}
      </Text>
      {iconRight}
    </button>
  );
};

export default Button;
