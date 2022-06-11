/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AbilityInterface, AbilityTypesInterface } from "../interfaces";
import { MenuItem, Select } from "@mui/material";

interface Props {
  dataAbilities: AbilityInterface;
  onChange: (e: any) => void;
  value: AbilityTypesInterface;
  abilities: ReadonlyArray<AbilityTypesInterface>;
}

export const GamerCardSelect = ({
  abilities,
  dataAbilities,
  onChange,
  value,
}: Props) =>
  abilities.length ? (
    <Select
      css={css`
        width: 100%;
        max-width: 210px;
        .MuiInputBase-input {
          padding: 10px;
        }
      `}
      value={value}
      onChange={onChange}
    >
      {abilities.map((ability) => (
        <MenuItem key={ability} value={ability}>
          {dataAbilities[ability].name}
        </MenuItem>
      ))}
    </Select>
  ) : (
    <></>
  );
