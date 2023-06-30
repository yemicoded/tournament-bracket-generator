"use client";
import classNames from "classnames";
import { Button } from "components/button";
import { Container } from "components/container";
import SimpleModal from "components/modal/simple-modal";
import { Text } from "components/typography";
import React from "react";
import PairParticipants from "views/bracket/pair-participants";

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const classes = classNames(
    "fixed inset-0 w-full h-[100px] bg-primary flex items-center justify-center"
  );
  return (
    <React.Fragment>
      <header className={classes}>
        <Container className="w-[80%] mx-auto flex items-center justify-between">
          <Text fontWeight="semibold" className="text-[28px] text-white">
            Tournament Bracket Generator
          </Text>
          <Button variant="secondary" onClick={()=>setModalOpen(true)}>Pair Participants</Button>
        </Container>
      </header>

      <SimpleModal
        isOpen={isModalOpen}
        setOpen={setModalOpen}
        className="flex items-center justify-center"
      >
        <PairParticipants setModalOpen={setModalOpen} />
      </SimpleModal>
    </React.Fragment>
  );
};

export default Header;
