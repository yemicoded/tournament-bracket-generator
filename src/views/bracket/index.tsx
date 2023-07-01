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
    "w-[94%] md:w-full mx-auto flex flex-col space-y-4 items-center justify-center py-4 md:p-6"
  );
  return (
    <Container className={classes}>
      <Text fontWeight="semibold" className="text-[14px] text-white lg:hidden bg-primary rounded-[4px] px-4 py-2">Swipe left for next round</Text>
      <Container className="w-full overflow-y-auto border-2 rounded-[15px] p-3 md:p-4 lg:p-6 flex flex-col space-y-6">
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
      <Text fontWeight="semibold" className="text-[14px] text-primary md:hidden">Swipe left for next round...</Text>
    </Container>
  );
};

export default BracketPageWrapper;
