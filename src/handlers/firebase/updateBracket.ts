import { TMatch } from "types/match";
import getDocumentByID from "./lib/getDocumentByID";
import updateDocument from "./lib/updateDocument";

const updateBracket = async (
  matchId: string,
  winner: string,
  roundIndex: number,
  seedIndex: number
) => {
  const prevBracket: { fbId: string; id: string; matchList: any[] } =
    await getDocumentByID("Matches", matchId);
  const newBracket: { id: string; matchList: any[] } = { ...prevBracket };
  newBracket.matchList[roundIndex + 1].seeds[
    getIndex(newBracket.matchList[roundIndex].seeds, seedIndex)
  ].teams[seedIndex % 2].name = winner;

  updateDocument("Matches", prevBracket.fbId, newBracket);
  console.log("brand-new", newBracket);
};

const getIndex = (seedList: any[], seedIndex: number) => {
  let a;
  let b;

  if (seedIndex % 2 === 1) {
    a = seedIndex - 1;
    b = seedIndex;
  } else {
    a = seedIndex;
    b = seedIndex + 1;
  }

  if (a === 0 || b === 0) {
    return 0;
  } else if (a > 3) {
    return a - a / 2;
  } else {
    return a - 1;
  }
};

export default updateBracket;
