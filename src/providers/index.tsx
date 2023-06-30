import React from "react";
import GameProvider from "./contexts/game-context";

interface IAppProvider {
  children: React.ReactNode;
}
const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  return <GameProvider>{children}</GameProvider>;
};

export default AppProvider;
