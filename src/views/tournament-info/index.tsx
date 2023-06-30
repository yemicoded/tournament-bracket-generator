"use client";
import classNames from "classnames";
import { Button } from "components/button";
import { Container } from "components/container";
import Input from "components/input/base-input";
import { Text } from "components/typography";
import { ITournamentInfo } from "handlers/form-handler/tournament-info";
import useFormHandler from "handlers/form-handler/useFormHandler";
import { APP_LINKS } from "navigations/app-links";
import { useRouter } from "next/navigation";
import { GameContext } from "providers/contexts/game-context";
import React from "react";
import { TFormHandler } from "types/form-handler";
import { sleep } from "utils/sleep";

const TournamentInfo: React.FC = () => {
  const { formik, isLoading, setValidationAttempt } = useFormHandler({
    type: "tournament-info",
  }) as TFormHandler<ITournamentInfo>;
  const router = useRouter();
  const classes = classNames("w-full h-full flex items-center justify-center");
  return (
    <Container className={classes}>
      <Container className="w-[500px] border-2 rounded-[15px] p-6 flex flex-col space-y-6">
        <Text fontWeight="semibold" className="text-[20px] text-center">
          Enter Tournament Info
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <Container className="flex flex-col space-y-6">
            <Input
              type="text"
              label="Tournament Name"
              placeholder="Enter Tournament Name"
              name="id"
              value={formik.values.id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.errors.id}
            />
            <Input
              type="number"
              label="No. of participants (Power of 2)"
              placeholder="Example 2, 4, 1 etc."
              name="participantsCount"
              value={formik.values.participantsCount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.errors.participantsCount}
            />
            <Button
              variant="primary"
              className="w-full"
              type="submit"
              onClick={() => {
                setValidationAttempt(true);
                // sleep(3000).then(() => {
                //   setLoading(false);
                // });
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

export default TournamentInfo;
