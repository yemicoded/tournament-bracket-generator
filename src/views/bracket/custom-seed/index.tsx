import { Container } from "components/container";
import { Text } from "components/typography";
import updateBracket from "handlers/firebase/updateBracket";
import React from "react";
import {
  Bracket,
  IRoundProps,
  IRenderSeedProps,
  Seed,
  SeedItem,
  SeedTeam,
} from "react-brackets";

interface ICustomSeed extends IRenderSeedProps {
  id: string;
}

const CustomSeedComponent = ({
  id,
  seed,
  breakpoint,
  roundIndex,
  seedIndex,
  rounds,
}: ICustomSeed) => {
  const handleUpdate = (winner: string) => {
    updateBracket(id, winner, roundIndex, seedIndex);
  };
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 16 }}>
      <Container className="max-w-fit min-w-full">
        <SeedItem style={{ backgroundColor: "#13262F" }}>
          <div>
            <SeedTeam style={{ color: "red" }}>
              <Text
                fontWeight="semibold"
                className={`h-full w-full ${
                  seed.teams[0]?.won ? "bg-white text-primary" : "text-white"
                } text-left px-2`}
              >
                {seed.teams[0]?.name || "-----"}
              </Text>
            </SeedTeam>
            <SeedTeam>
              <Text
                fontWeight="semibold"
                className={`h-full w-full ${
                  seed.teams[1]?.won ? "bg-white text-primary" : "text-white"
                } text-left px-2`}
              >
                {seed.teams[1]?.name || "-----"}
              </Text>
            </SeedTeam>
          </div>
        </SeedItem>
        <Container>
          <select
            onChange={({ target }) => handleUpdate(target.value)}
            className="outline-none w-full px-2 py-1 border-2 rounded-b-[6px]"
          >
            <option value="">Select Winner</option>
            <option value={seed.teams[0]?.name}>{seed.teams[0]?.name}</option>
            <option value={seed.teams[1]?.name}>{seed.teams[1]?.name}</option>
          </select>
          {/* <Text className="text-[12px]">Seed Index {seedIndex}</Text> */}
        </Container>
      </Container>
    </Seed>
  );
};

export default CustomSeedComponent;
