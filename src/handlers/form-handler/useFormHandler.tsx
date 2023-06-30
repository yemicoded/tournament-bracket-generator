import React from "react";
import ParticipantsNameHandler from "./participants-name";
import TournamentInfoHandler from "./tournament-info";
import PairParticipantsHandler from "./pair-participants";

type TFormProps = {
  type: "participants-name" | "tournament-info" | "pair-participants";
};
const useFormHandler = (param: TFormProps) => {
  switch (param.type) {
    case "participants-name":
      return ParticipantsNameHandler();
    case "tournament-info":
      return TournamentInfoHandler();
    case "pair-participants":
      return PairParticipantsHandler();
    default:
      return null;
  }
};

export default useFormHandler;
