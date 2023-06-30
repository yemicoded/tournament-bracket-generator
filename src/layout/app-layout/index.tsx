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
      <Container className="min-h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] mt-[100px] overflow-hidden">
        <main className="h-full">{children}</main>
      </Container>
    </React.Fragment>
  );
};

export default AppLayout;
