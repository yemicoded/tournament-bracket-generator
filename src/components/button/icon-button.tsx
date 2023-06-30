import { Container } from "components/container";
import { Text } from "components/typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { IconContext } from "react-icons/lib";

interface IIconButton extends React.ComponentProps<"button"> {
  icon?: React.ReactNode;
  href?: string;
  variant: "primary" | "secondary" | "none";
  disabled?: boolean;
  isLoading?: boolean;
  rounded?: boolean;
}

const IconButton: React.FC<IIconButton> = ({
  className,
  icon,
  disabled,
  href = "",
  variant = "primary",
  children,
  rounded,
  isLoading,
  ...rest
}) => {
  const classes = classNames(
    "flex items-center justify-center rounded-[4px] w-[40px] h-[40px] duration-300 overflow-hidden",
    {
      "bg-primary text-white hover:bg-primary/95": variant === "primary",
    },
    {
      "bg-secondary text-white hover:bg-secondary/95": variant === "secondary",
    },
    { "cursor-not-allowed": disabled || isLoading },
    { "bg-primary/20 hover:bg-primary/20": disabled && variant === "primary" },
    {
      "bg-secondary/20 hover:bg-secondary/20":
        disabled && variant === "secondary",
    },
    { className: variant === "none" },
    { "rounded-full": rounded },
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
          {icon}
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
      {icon}
    </button>
  );
};

export default IconButton;
