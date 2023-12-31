"use client";
import { Container } from "components/container";
import React from "react";
import Header from "./header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IAppLayout {
  children: React.ReactNode;
}
const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="mt-[80px] md:mt-[100px]">
        <Container className="w-full min-h-full">{children}</Container>
      </main>
      <ToastContainer />
    </React.Fragment>
  );
};

export default AppLayout;
