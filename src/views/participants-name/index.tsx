"use client";
import classNames from "classnames";
import { Button } from "components/button";
import { Container } from "components/container";
import Input from "components/input/base-input";
import { Text } from "components/typography";
import { GameContext } from "providers/contexts/game-context";
import React from "react";
import { sleep } from "utils/sleep";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db } from "handlers/firebase/config";
import { TParticipant } from "types/participant";
import useFormHander from "handlers/form-handler/useFormHandler";
import { TFormHandler } from "types/form-handler";
import { IModifiedParticipantsFormValue } from "handlers/form-handler/participants-name";
import { useRouter, useSearchParams } from "next/navigation";
import getAllDocument from "handlers/firebase/lib/getAllDocument";
import getSingleDocument from "handlers/firebase/lib/getSingleDocument";
import getDocumentByID from "handlers/firebase/lib/getDocumentByID";

const ParticipantsName: React.FC = () => {
  // const { participants_count: count } = React.useContext(GameContext);
  const { formik, isLoading, setValidationAttempt } = useFormHander({
    type: "participants-name",
  }) as TFormHandler<IModifiedParticipantsFormValue>;
  const count = useSearchParams().get("count");


  const classes = classNames("w-full h-full flex items-center justify-center");
  return (
    <Container className={classes}>
      <Container className="w-[500px] max-h-[500px] overflow-y-auto border-2 rounded-[15px] p-6 flex flex-col space-y-6">
        <Container>
          <Text fontWeight="semibold" className="text-[20px] text-center">
            Enter Participants Name
          </Text>
          <Text fontWeight="semibold" className="text-[16px] text-center">
            You requested to enter {count} participants
          </Text>
        </Container>
        <form onSubmit={formik.handleSubmit}>
          <Container className="flex flex-col space-y-6">
            {Array.from({ length: count as unknown as number }).map(
              (_, index) => (
                <Input
                  key={index}
                  name={
                    formik.values.participants[index].name as unknown as string
                  }
                  onChange={(e) => {
                    formik.values.participants[index].name = e.target.value;
                  }}
                  errorMessage={
                    formik.errors.participants &&
                    formik.errors.participants[index] &&
                    "Enter Name"
                  }
                  onBlur={formik.handleBlur}
                  label={`Participant ${index + 1}`}
                  placeholder={`Enter Participant ${index + 1} Name`}
                />
              )
            )}
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              onClick={() => {
                setValidationAttempt(true);
              }}
              isLoading={isLoading}
            >
              Proceed
            </Button>
          </Container>
        </form>
      </Container>
    </Container>
  );
};

export default ParticipantsName;
