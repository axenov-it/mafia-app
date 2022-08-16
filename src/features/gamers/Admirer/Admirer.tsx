import { Button, MenuItem, Select } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "common/interfaces";

import { useCheckAbility } from "./hooks";

export const Admirer = ({
  gamer,
  gamerNumbers,
  onFinishAbility,
  checkIsBlocked,
}: GamerPropsInterface) => {
  const abilityCheck = useAbility(gamer.role.abilities[0]);

  const { gamerIdCheckValue, onChangeGamerCheckId, onRunAbilityCheck } =
    useCheckAbility(onFinishAbility, checkIsBlocked);

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
