"use client"
import React from "react";

interface IGameContext {
  participants_count: number;
  setParticipantsCount: React.Dispatch<React.SetStateAction<number>>;
  // matches: any;
  // set
}
export const GameContext = React.createContext<IGameContext>({} as IGameContext);

interface IGameContextProps {
  children: React.ReactNode;
}
const GameProvider: React.FC<IGameContextProps> = ({ children }) => {
  const [participantsCount, setParticipantsCount] = React.useState<number>(0);
  return (
    <GameContext.Provider
      value={{ participants_count: participantsCount, setParticipantsCount }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
