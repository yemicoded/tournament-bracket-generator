import React from "react";
import SimpleModal, { ISimpleModal } from "./simple-modal";
import classNames from "classnames";
import { Container } from "components/container";
import { Text } from "components/typography";
import IconButton from "components/button/icon-button";
import { ImCancelCircle } from "react-icons/im";
import { Button } from "components/button";

interface IDailogModal extends ISimpleModal {
  heading?: React.ReactNode;
  onCancel?:()=>void;
  onSuccess?:()=>void
}

const DialogModal: React.FC<IDailogModal> = ({
  children = "Hello There",
  onCancel=()=>{},
  onSuccess=()=>{},
  isOpen,
  setOpen,
  heading = "Hello",
  ...rest
}) => {
  const classes = classNames("");
  return (
    <SimpleModal
      isOpen={isOpen}
      setOpen={setOpen}
      display="flex"
      alignItems="center"
      justifyContents="center"
      //   className={classes}
    >
      <Container className="w-[450px] bg-white rounded-[10px] p-4 px-6 flex flex-col space-y-3">
        <Container display="flex" alignItems="center" justifyContents="between">
          <Text as="h2" fontWeight="semibold" className="text-[24px]">
            {heading}
          </Text>
          <IconButton
            variant="none"
            icon={<ImCancelCircle className="text-gray-500 text-[18px]" />}
            className="hover:bg-gray-200"
            onClick={() => setOpen(false)}
          />
        </Container>
        <Container>{children}</Container>
        <Container className="flex items-center space-x-3">
          <Button variant="primary" onClick={()=>onCancel()} className="flex-1">Cancel</Button>
          <Button variant="secondary" onClick={()=>onSuccess()} className="flex-1">Proceed</Button>
        </Container>
      </Container>
    </SimpleModal>
  );
};

export default DialogModal;
