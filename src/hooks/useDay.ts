import { useState } from "react";
import { AnaliticLog } from "../clases/AnaliticLog";
import { AddAnaliticInterface } from "../interfaces";

export const useAnalitics = () => {
  const [logs, setLogs] = useState([] as ReadonlyArray<AnaliticLog>);

  const addAnaliticLog = ({
    nightNumber,
    currentGamer,
    pushedGamer,
  }: AddAnaliticInterface) => {
    const log = new AnaliticLog(nightNumber, currentGamer, pushedGamer);

    setLogs([...logs, log]);
  };

  return {
    logs,
    addAnaliticLog,
  };
};
