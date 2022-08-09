import { GamerInterface } from "common/interfaces";
import { MenuItem } from "../MenuItem";
import { Select } from "../Select";
import { GamerCard, GamerBottom } from "./components";
import { useGamer } from "./hooks";

interface Props {
  gamer: GamerInterface;
  gamerNumbers: number[];
}

export const NigthGamer = ({ gamer, gamerNumbers }: Props) => {
  const { gamerAbilities, onChangeAbility } = useGamer(gamer);

  return (
    <GamerCard>
      <h2>{gamer.role.name}</h2>

      <GamerBottom>
        {gamerAbilities.map(({ id, name, value }) => (
          <Select
            key={id}
            label={name}
            onChange={onChangeAbility}
            value={value}
            name={id}
          >
            {gamerNumbers.map((gamerNumber) => (
              <MenuItem key={gamerNumber} value={gamerNumber}>
                {gamerNumber}
              </MenuItem>
            ))}
          </Select>
        ))}
      </GamerBottom>
    </GamerCard>
  );
};
