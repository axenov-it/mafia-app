import { useGamers } from "common/hooks";
import { AbilityInterface, GamerInterface } from "common/interfaces";
import { useState } from "react";
import { OnFinishAbilityInterface } from "../../../interfaces";

export const useBeauty = (
  onFinishAbility: OnFinishAbilityInterface,
  ability: AbilityInterface
) => {
  const [gamerIdValue, setGamerIdValue] = useState("");
  const { gamers, pushIncomingAbility } = useGamers();

  const onChangeGamerId = (e: any) => setGamerIdValue(e.target.value);

  const onRunAbility = (e: any) => {
    // eslint-disable-next-line no-restricted-globals
    const isRunAbility = confirm("Використати здібність ?");

    if (isRunAbility) {
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
