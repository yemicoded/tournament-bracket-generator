"use client";
import classNames from "classnames";
import { Button } from "components/button";
import { Container } from "components/container";
import SimpleModal from "components/modal/simple-modal";
import { Text } from "components/typography";
import { APP_LINKS } from "navigations/app-links";
import { usePathname } from "next/navigation";
import React from "react";
import PairParticipants from "views/bracket/pair-participants";

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const pathname = usePathname();
  console.log("Pathname", pathname);
  const classes = classNames(
    "fixed inset-0 w-full h-[100px] bg-primary flex items-center justify-center"
  );
  return (
    <React.Fragment>
      <header className={classes}>
        <Container className="w-[95%] md:w-[90%] mx-auto flex flex-col md:flex-row md:items-center md:justify-between">

        <Text
              fontWeight="semibold"
              className="hidden lg:block text-[20px] md:text-[24px] lg:text-[28px] text-white text-center md:text-left"
            >
              Tournament Bracket Generator
            </Text>
          {pathname !== APP_LINKS.BRACKET && (
            <Text
              fontWeight="semibold"
              className="lg:hidden text-[20px] md:text-[24px] lg:text-[28px] text-white text-center md:text-left"
            >
              Tournament Bracket Generator
            </Text>
          )}
          {pathname === APP_LINKS.BRACKET && (
            <Button
              variant="secondary"
              onClick={() => setModalOpen(true)}
              className="w-fit place-self-end"
            >
              Pair Participants
            </Button>
          )}
        </Container>
      </header>

      <SimpleModal
        isOpen={isModalOpen}
        setOpen={setModalOpen}
        className="flex items-center justify-center p-4"
      >
        <PairParticipants setModalOpen={setModalOpen} />
      </SimpleModal>
    </React.Fragment>
  );
};

export default Header;
