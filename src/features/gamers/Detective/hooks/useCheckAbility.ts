import { GamerInterface } from "common/interfaces";
import { useState } from "react";
import { OnFinishAbilityInterface } from "../../../interfaces";
import { useGamers } from "common/hooks";

export const useCheckAbility = (onFinishAbility: OnFinishAbilityInterface) => {
  const [gamerIdsCheckValue, setGamerIdsCheckValue] = useState<number[]>([]);
  const { gamers } = useGamers();

  const onChangeGamerCheckIds = (value: number[]) =>
    setGamerIdsCheckValue(value);

  const onRunAbilityCheck = (e: any) => {
    // eslint-disable-next-line no-restricted-globals
    const isRunAbility = confirm("Використати здібність перевірка ?");

    if (gamerIdsCheckValue.length < 2) return;

    if (isRunAbility) {
      const firstGamer = gamers.find(
        ({ id }) => id === Number(gamerIdsCheckValue[0])
      ) as GamerInterface;

      const secondGamer = gamers.find(
        ({ id }) => id === Number(gamerIdsCheckValue[1])
      ) as GamerInterface;

      const title =
        firstGamer.role.type === secondGamer.role.type ? "ТАК" : "НІ";

      alert(`${firstGamer.role.name} - ${secondGamer.role.name} - ${title}`);

      onFinishAbility(0);
    }
  };

  return {
    onChangeGamerCheckIds,
    gamerIdsCheckValue,
    onRunAbilityCheck,
  };
};
