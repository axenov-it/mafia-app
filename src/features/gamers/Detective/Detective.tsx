import { Button, MenuItem, Multiple, Select } from "common/components";
import { useAbility } from "common/hooks";
import { GamerPropsInterface } from "common/interfaces";

import { useCheckAbility } from "./hooks";

export const Detective = ({
  gamer,
  gamerNumbers,
  onFinishAbility,
}: GamerPropsInterface) => {
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
