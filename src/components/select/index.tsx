import classNames from "classnames";
import { Container } from "components/container";
import { Text } from "components/typography";
import React from "react";

interface ISelect extends React.ComponentProps<"select"> {
  errorMessage?: React.ReactNode;
  renderOptions?: React.ReactNode;
  label?: React.ReactNode;
}

const Select: React.FC<ISelect> = ({
  label,
  className,
  errorMessage,
  renderOptions = <option>Hello</option>,
  ...rest
}) => {
  const classes = classNames("flex flex-col space-y-1", className);
  return (
    <Container className={classes}>
      <Text fontWeight="semibold" className="text-[15px] text-gray-700">
        {label}
      </Text>
      <Container className="">
        <select
          {...rest}
          className="border-2 rounded-[6px] w-full py-[10px] px-4 w-full outline-none font-montserrat bg-transparent"
        >
          {renderOptions}
        </select>
      </Container>
      <Text fontWeight="semibold" className="text-[14px] text-red-500">
        {errorMessage}
      </Text>
    </Container>
  );
};

export default Select