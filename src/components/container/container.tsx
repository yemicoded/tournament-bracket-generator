/* eslint-disable react/display-name */
import React from "react";
import classNames from "classnames";

export interface IContainer extends Omit<React.ComponentProps<"div">, "ref"> {
  position?: "relative" | "absolute" | "static";
  display?: "block" | "flex" | "inline" | "inline-block" | "inline-flex";
  alignItems?: "center" | "start" | "end";
  tooltip?: string;
  justifyContents?:
    | "center"
    | "start"
    | "end"
    | "between"
    | "around"
    | "evenly";
}
const Container = React.forwardRef<HTMLDivElement, IContainer>(
  (
    {
      position,
      display = "block",
      className,
      children,
      tooltip,
      alignItems,
      justifyContents,
      ...rest
    },
    ref
  ) => {
    const classes = classNames(
      display,
      position,
      `items-${alignItems}`,
      `justify-${justifyContents}`,
      className
    );
    return (
      <div {...rest} title={tooltip} ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

export default Container;
