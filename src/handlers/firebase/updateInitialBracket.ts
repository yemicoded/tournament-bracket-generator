import { TMatch } from "types/match";
import getDocumentByID from "./lib/getDocumentByID";
import updateDocument from "./lib/updateDocument";
import { ISeed } from "handlers/form-handler/pair-participants";
import { TParticipant } from "types/participant";
import { createBrackets } from "./createBrackets";

const updateInitialBracket = async (matchId: string, seeds: ISeed[], participants:TParticipant[]) => {
  const prevBracket: { fbId: string; id: string; matchList: any[] } =
    await getDocumentByID("Matches", matchId);
//   const newBracket: { id: string; matchList: any[] } = { ...prevBracket };
  const newBracket: { id: string; matchList: any[] } = {
    id: matchId,
    matchList: createBrackets(participants)
  }

  newBracket.matchList[0].seeds = seeds;
  updateDocument("Matches", prevBracket.fbId, newBracket);
  console.log("New Seed", newBracket);
};

export default updateInitialBracket;
