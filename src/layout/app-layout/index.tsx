"use client"
import { Container } from "components/container";
import React from "react";
import Header from "./header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IAppLayout{
    children: React.ReactNode;
}
const AppLayout: React.FC<IAppLayout> = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      <Container className="mt-[70px] md:mt-[100px]">
        {/* <Container className="bg-blue-500 min-h-[100%]"></Container> */}
        <main className="w-full min-h-full">{children}</main>
      </Container>
      <ToastContainer />
    </React.Fragment>
  );
};

export default AppLayout;
