import { GamerInterface } from "common/interfaces";
import { useState } from "react";
import { OnFinishAbilityInterface } from "../../../interfaces";
import { useGamers } from "common/hooks";

export const useCheckAbility = (onFinishAbility: OnFinishAbilityInterface) => {
  const [gamerIdCheckValue, setGamerIdCheckValue] = useState("");
  const { gamers } = useGamers();

  const onChangeGamerCheckId = (e: any) => setGamerIdCheckValue(e.target.value);

  const onRunAbilityCheck = (e: any) => {
    // eslint-disable-next-line no-restricted-globals
    const isRunAbility = confirm("Використати здібність перевірка ?");

    if (isRunAbility && gamerIdCheckValue) {
      const checkedGamer = gamers.find(
        ({ id }) => id === Number(gamerIdCheckValue)
      ) as GamerInterface;

      const title = checkedGamer.role.id === "sheriff" ? "ТАК" : "НІ";

      alert(`${checkedGamer.role.name} - ${title}`);

      onFinishAbility(0);
    }
  };

  return {
    onChangeGamerCheckId,
    gamerIdCheckValue,
    onRunAbilityCheck,
  };
};
