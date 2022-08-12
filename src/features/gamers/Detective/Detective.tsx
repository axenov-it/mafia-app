import { Button, MenuItem, Multiple, Select } from "common/components";
import { useAbility } from "common/hooks";
import { GamerInterface } from "common/interfaces";

import { useCheckAbility } from "./hooks";
import { OnFinishAbilityInterface } from "../../interfaces";

interface Props {
  gamer: GamerInterface;
  gamerNumbers: number[];
  onFinishAbility: OnFinishAbilityInterface;
}

export const Detective = ({ gamer, gamerNumbers, onFinishAbility }: Props) => {
  const abilityCheck = useAbility(gamer.role.abilities[0]);

  const { onChangeGamerCheckIds, onRunAbilityCheck } =
    useCheckAbility(onFinishAbility);

  return (
    <>
      <Multiple
        options={gamerNumbers}
        onChange={onChangeGamerCheckIds}
        title={abilityCheck.name}
        maxSelected={2}
      />

      <Button onClick={onRunAbilityCheck}>Використати здібність</Button>
    </>
  );
};
