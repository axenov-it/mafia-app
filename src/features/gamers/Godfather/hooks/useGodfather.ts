import { useGamers } from "common/hooks";
import { AbilityInterface, GamerInterface } from "common/interfaces";
import { useState } from "react";
import { OnFinishAbilityInterface } from "../../../interfaces";

export const useGodfather = (
  onFinishAbility: OnFinishAbilityInterface,
  ability: AbilityInterface,
  checkIsBlocked: () => boolean
) => {
  const [gamerIdValue, setGamerIdValue] = useState("");
  const { gamers, pushIncomingAbility } = useGamers();

  const onChangeGamerId = (e: any) => setGamerIdValue(e.target.value);

  const onRunAbility = (e: any) => {
    // eslint-disable-next-line no-restricted-globals
    const isRunAbility = confirm("Використати здібність ?");
    if (checkIsBlocked()) return;

    if (isRunAbility && gamerIdValue) {
      const pushedGamer = gamers.find(
        ({ id }) => id === Number(gamerIdValue)
      ) as GamerInterface;

      pushIncomingAbility(pushedGamer.id, ability.id);
      onFinishAbility(0);
    }
  };

  return {
    onChangeGamerId,
    gamerIdValue,
    onRunAbility,
  };
};
