import { Button, MenuItem, Select } from "common/components";
import { useAbility } from "common/hooks";
import { GamerInterface } from "common/interfaces";

import { useCheckAbility } from "./hooks";
import { OnFinishAbilityInterface } from "../../interfaces";

interface Props {
  gamer: GamerInterface;
  gamerNumbers: number[];
  onFinishAbility: OnFinishAbilityInterface;
}

export const Admirer = ({ gamer, gamerNumbers, onFinishAbility }: Props) => {
  const abilityCheck = useAbility(gamer.role.abilities[0]);

  const { gamerIdCheckValue, onChangeGamerCheckId, onRunAbilityCheck } =
    useCheckAbility(onFinishAbility);

  return (
    <>
      <Select
        label={abilityCheck.name}
        name={abilityCheck.id}
        onChange={(e) => {
          onChangeGamerCheckId(e);
        }}
        value={gamerIdCheckValue}
      >
        {gamerNumbers.map((gamerNumber) => (
          <MenuItem key={gamerNumber} value={gamerNumber}>
            {gamerNumber}
          </MenuItem>
        ))}
      </Select>

      <Button onClick={onRunAbilityCheck}>Використати здібність</Button>
    </>
  );
};
