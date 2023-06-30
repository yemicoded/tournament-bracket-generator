"use client";

import { Container } from "components/container";
import { IContainer } from "components/container/container";
import React, { DOMElement } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

export interface ISimpleModal extends IContainer {
  isOpen?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  canSelfClose?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SimpleModal = ({
  children,
  className,
  isOpen,
  setOpen,
  canSelfClose,
  ...rest
}: ISimpleModal): React.ReactPortal | null => {
  const classes = classNames(
    "w-full fixed z-[1050] inset-0 h-[100%] duration-500 bg-black/50 transition duration-500 ease-in-out",
    className
  );
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  return mounted && isOpen
    ? ReactDOM.createPortal(
        <Container
          {...rest}
          className={classes}
          onClick={({ target, currentTarget }) =>
            canSelfClose && target === currentTarget ? setOpen(false) : null
          }
        >
          {children}
        </Container>,
        document.getElementById("modal") as HTMLElement
      )
    : null;
};

export default SimpleModal;
