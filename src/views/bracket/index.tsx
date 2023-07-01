"use client";
import classNames from "classnames";
import { Button } from "components/button";
import { Container } from "components/container";
import Input from "components/input/base-input";
import { Text } from "components/typography";
import { GameContext } from "providers/contexts/game-context";
import React from "react";
import { Bracket } from "react-brackets";
import getDocumentByID from "handlers/firebase/lib/getDocumentByID";
import { useSearchParams } from "next/navigation";
import CustomSeedComponent from "./custom-seed";

const BracketPageWrapper: React.FC = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [matches, setMatches] = React.useState<any[]>([]);
  const tournamentID = useSearchParams().get("tournament");

  React.useEffect(() => {
    if (tournamentID) {
      getDocumentByID("Matches", tournamentID)
        .then((res: any) => {
          setMatches(res.matchList);
        })
        .catch(() => {});
    }
  });

  const classes = classNames(
    "w-[94%] md:w-full mx-auto min-h-[calc(100vh-100px)] flex items-center justify-center md:p-6"
  );
  return (
    <Container className={classes}>
      <Container className="w-full min-h-full max-h-full overflow-y-auto border-2 rounded-[15px] p-2 md:p-4 lg:p-6 flex flex-col space-y-6">
        <Container className="flex flex-col space-y-6 h-full w-full">
          <Bracket
            rounds={matches}
            roundTitleComponent={(
              title: React.ReactNode,
              roundIndex: number
            ) => {
              return (
                <Text
                  fontWeight="semibold"
                  className="text-center text-primary"
                >
                  {String(title).toUpperCase()}
                </Text>
              );
            }}
            renderSeedComponent={({ ...rest }) => (
              <CustomSeedComponent id={tournamentID as string} {...rest} />
            )}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default BracketPageWrapper;
