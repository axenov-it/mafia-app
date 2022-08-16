import { Button, MenuItem, Select } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "common/interfaces";

import { useKillAbility, useCheckAbility } from "./hooks";

export const Sheriff = ({
  gamer,
  gamerNumbers,
  onFinishAbility,
}: GamerPropsInterface) => {
  const abilityCheck = useAbility(gamer.role.abilities[0]);
  const abilityKill = useAbility(gamer.role.abilities[1]);

  const {
    gamerIdCheckValue,
    onChangeGamerCheckId,
    onRunAbilityCheck,
    resetCheck,
  } = useCheckAbility(onFinishAbility, gamer.role.type);

  const { gamerIdKillValue, onChangeGamerKillId, onRunAbilityKill, resetKill } =
    useKillAbility(onFinishAbility, abilityKill);

  return (
    <>
      <Select
        label={abilityCheck.name}
        name={abilityCheck.id}
        onChange={(e) => {
          onChangeGamerCheckId(e);
          resetKill();
        }}
        value={gamerIdCheckValue}
      >
        {gamerNumbers.map((gamerNumber) => (
          <MenuItem key={gamerNumber} value={gamerNumber}>
            {gamerNumber}
          </MenuItem>
        ))}
      </Select>

      <Select
        label={abilityKill.name}
        name={abilityKill.id}
        onChange={(e) => {
          onChangeGamerKillId(e);
          resetCheck();
        }}
        value={gamerIdKillValue}
      >
        {gamerNumbers.map((gamerNumber) => (
          <MenuItem key={gamerNumber} value={gamerNumber}>
            {gamerNumber}
          </MenuItem>
        ))}
      </Select>

      <Button onClick={gamerIdKillValue ? onRunAbilityKill : onRunAbilityCheck}>
        Використати здібність
      </Button>
    </>
  );
};
