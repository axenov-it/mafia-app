import { AbilityInterface, GamerInterface } from "common/interfaces";
import { useState } from "react";
import { OnFinishAbilityInterface } from "../../../interfaces";
import { useGamers } from "common/hooks";

export const useKillAbility = (
  onFinishAbility: OnFinishAbilityInterface,
  ability: AbilityInterface
) => {
  const [gamerIdKillValue, setGamerIdKillValue] = useState("");
  const { gamers, pushIncomingAbility } = useGamers();

  const onChangeGamerKillId = (e: any) => setGamerIdKillValue(e.target.value);

  const onRunAbilityKill = (e: any) => {
    // eslint-disable-next-line no-restricted-globals
    const isRunAbility = confirm("Використати здібність вбивство ?");

    if (isRunAbility && gamerIdKillValue) {
      const pushedGamer = gamers.find(
        ({ id }) => id === Number(gamerIdKillValue)
      ) as GamerInterface;

      pushIncomingAbility(pushedGamer.id, ability.id);
      onFinishAbility(0);
    }
  };

  return {
    onChangeGamerKillId,
    gamerIdKillValue,
    onRunAbilityKill,
    resetKill: () => setGamerIdKillValue(""),
  };
};
