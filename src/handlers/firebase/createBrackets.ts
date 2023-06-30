import { TMatch } from "types/match";
import { TParticipant } from "types/participant";

export const createBrackets = (participants: TParticipant[]) => {
  const totalRounds = Math.ceil(Math.log2(participants.length));
  const bracket = [] as unknown as any[];
  let matchList = [] as TMatch[];
  let matchId = 1;
  let nextMatchId = participants.length / 2 + 1;

  for (let round = 0; round < totalRounds; round++) {
    const matches = [];
    const numMatches = participants.length / Math.pow(2, round + 1);

    for (let match = 0; match < numMatches; match++) {
      const team1Index = match * 2;
      const team2Index = match * 2 + 1;

      let matchData = {
        id: participants[match].id,
        teams: [{...participants[team1Index], name:""} as TParticipant, {...participants[team2Index], name:""} as TParticipant],
      };

      matches.push(matchData);

      matchId++;
    }

    bracket.push({ matches });

    if (round === 0) {
      nextMatchId++;
    }
  }

  for (let i = 0; i < bracket.length; i++) {
    matchList.push({ title: `round ${i + 1}`, seeds: bracket[i].matches });
  }

  return matchList;
};
