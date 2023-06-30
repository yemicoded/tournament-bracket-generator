import { TMatch } from "types/match";
import getDocumentByID from "./lib/getDocumentByID";
import updateDocument from "./lib/updateDocument";
import { ISeed } from "handlers/form-handler/pair-participants";

const updateInitialBracket = async (matchId: string, seeds: ISeed[]) => {
  const prevBracket: { fbId: string; id: string; matchList: any[] } =
    await getDocumentByID("Matches", matchId);
  const newBracket: { id: string; matchList: any[] } = { ...prevBracket };

  newBracket.matchList[0].seeds = seeds;
  updateDocument("Matches", prevBracket.fbId, newBracket);
  console.log("New Seed", newBracket);
};

export default updateInitialBracket;
