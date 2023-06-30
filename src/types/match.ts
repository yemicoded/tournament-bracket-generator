import { TParticipant } from "./participant";

// export type TMatch =  {
//     id: number;
//     // name: "Final - Match",
//     nextMatchId: number; // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
//     tournamentRoundText: string; // Text for Round Header
//     // startTime: "2021-05-30",
//     // state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
//     participants: TParticipant[];
//   }

  export type TMatch =  {
    title: string;
    seeds: TParticipant[];
  }
