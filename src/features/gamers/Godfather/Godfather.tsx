import { Button, MenuItem, Select } from "common/components";
import { useAbility } from "common/hooks";
import { GamerInterface } from "common/interfaces";

import { useGodfather } from "./hooks";
import { OnFinishAbilityInterface } from "../../interfaces";

interface Props {
  gamer: GamerInterface;
  gamerNumbers: number[];
  onFinishAbility: OnFinishAbilityInterface;
}

export const Godfather = ({ gamer, gamerNumbers, onFinishAbility }: Props) => {
  const ability = useAbility(gamer.role.abilities[0]);

  const { onChangeGamerId, gamerIdValue, onRunAbility } = useGodfather(
    onFinishAbility,
    ability
  );

  return (
    <>
      <Select
        label={ability.name}
        name={ability.id}
        onChange={onChangeGamerId}
        value={gamerIdValue}
      >
        {gamerNumbers.map((gamerNumber) => (
          <MenuItem key={gamerNumber} value={gamerNumber}>
            {gamerNumber}
          </MenuItem>
        ))}
      </Select>
      <Button onClick={onRunAbility}>Використати здібність</Button>
    </>
  );
};
