import { Container } from "components/container";
import React from "react";
import Header from "./header";

interface IAppLayout{
    children: React.ReactNode;
}
const AppLayout: React.FC<IAppLayout> = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      <Container className="mt-[100px]">
        {/* <Container className="bg-blue-500 min-h-[100%]"></Container> */}
        <main className="w-full min-h-full">{children}</main>
      </Container>
    </React.Fragment>
  );
};

export default AppLayout;
