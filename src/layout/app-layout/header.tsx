"use client";
import classNames from "classnames";
import { Button } from "components/button";
import IconButton from "components/button/icon-button";
import { Container } from "components/container";
import SimpleModal from "components/modal/simple-modal";
import { Text } from "components/typography";
import { APP_LINKS } from "navigations/app-links";
import { usePathname } from "next/navigation";
import React from "react";
import PairParticipants from "views/bracket/pair-participants";
import { AiFillHome } from "react-icons/ai";

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const pathname = usePathname();
  console.log("Pathname", pathname);
  const classes = classNames(
    "fixed inset-0 w-full h-[80px] md:h-[100px] bg-primary flex items-center justify-center z-[99]"
  );
  return (
    <React.Fragment>
      <header className={classes}>
        <Container className="w-[95%] md:w-[90%] mx-auto flex items-center justify-between">
          {/* <Container> */}
            <Text
              fontWeight="semibold"
              className="w-full hidden lg:block text-[20px] md:text-[24px] lg:text-[28px] text-white text-center"
            >
              Tournament Bracket Generator
            </Text>
          {/* </Container> */}
          {pathname !== APP_LINKS.BRACKET && (
            <Text
              fontWeight="semibold"
              className="w-full lg:hidden text-[20px] md:text-[24px] lg:text-[28px] text-white text-center"
            >
              Tournament Bracket Generator
            </Text>
          )}
          {pathname === APP_LINKS.BRACKET && (
            <Container className="w-full lg:w-fit flex items-center justify-between">
              <IconButton
                variant="none"
                icon={<AiFillHome />}
                className="bg-white lg:hidden"
                href={APP_LINKS.HOME}
              />
              <Button
                variant="secondary"
                onClick={() => setModalOpen(true)}
                className="w-fit"
              >
                Pair Participants
              </Button>
            </Container>
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
