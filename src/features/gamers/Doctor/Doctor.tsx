import { Button, MenuItem, Select } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "common/interfaces";

import { useDoctor } from "./hooks";

export const Doctor = ({
  gamer,
  gamerNumbers,
  onFinishAbility,
}: GamerPropsInterface) => {
  const ability = useAbility(gamer.role.abilities[0]);

  const { onChangeGamerId, gamerIdValue, onRunAbility } = useDoctor(
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
