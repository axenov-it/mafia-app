import { MenuItem, Select } from "common/components";
import { useAbility } from "common/hooks";
import { GamerInterface } from "common/interfaces";

import { useBeauty } from "./hooks";
import { RunNextGamerInterface } from "./interfaces";

interface Props {
  gamer: GamerInterface;
  gamerNumbers: number[];
  onFinishAbility: RunNextGamerInterface;
}

export const Beauty = ({ gamer, gamerNumbers, onFinishAbility }: Props) => {
  const ability = useAbility(gamer.role.abilities[0]);

  useBeauty();

  return (
    <>
      <Select label={ability.name}>
        {gamerNumbers.map((gamerNumber) => (
          <MenuItem key={gamerNumber}>{gamerNumber}</MenuItem>
        ))}
      </Select>
    </>
  );
};
