// export type TParticipant = {
//   id: string; // Unique identifier of any kind
//   pid: string; // Unique identifier of any kind
//   resultText: "WON" | "LOST" | null; // Any string works
//   isWinner: boolean;
//   status: "PLAYED" | "NO_SHOW" | "WALK_OVER" | "NO_PARTY" | null; // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
//   name: string;
//   tournamentId: string;
// };

export type TParticipant = {
  id: number;
  won: boolean;
  name: string;
};
