import { useGamers } from "common/hooks";
import { AbilityInterface, GamerInterface } from "common/interfaces";
import { useState } from "react";
import { OnFinishAbilityInterface } from "../../../interfaces";

export const useBeauty = (
  onFinishAbility: OnFinishAbilityInterface,
  ability: AbilityInterface,
  checkIsBlocked: () => boolean
) => {
  const [gamerIdValue, setGamerIdValue] = useState("");
  const { gamers, pushIncomingAbility } = useGamers();

  const onChangeGamerId = (e: any) => setGamerIdValue(e.target.value);

  const onRunAbility = (e: any) => {
    if (!gamerIdValue) return alert("Оберіть гравця!");

    if (checkIsBlocked()) return;

    const pushedGamer = gamers.find(
      ({ id }) => id === Number(gamerIdValue)
    ) as GamerInterface;

    // eslint-disable-next-line no-restricted-globals
    const isRunAbility = confirm(
      `Використати здібність в ${pushedGamer.role.name} ?`
    );

    if (isRunAbility) {
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
