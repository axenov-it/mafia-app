/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { AbilityInterface, AbilityTypesInterface } from "../interfaces";
import { GamerCardWrap } from "./GamerCardWrap";

import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import GroupIcon from "@mui/icons-material/Group";
import DeleteIcon from "@mui/icons-material/Delete";
import { GamerCardStatus } from "./GamerCardStatus";
import { Gamer } from "../clases";

interface Props {
  gamer: Gamer;
  dataAbilities: AbilityInterface;
  onGamerPush: (gamerId: number) => void;
  onChageGamerAbility: (
    gamerId: number,
    abilityId: AbilityTypesInterface
  ) => void;
}

export const GamerCard = ({
  gamer: {
    id,
    isActive,
    isBlocked,
    title,
    abilityType,
    isKilled,
    role: { name, priority, abilities },
  },
  dataAbilities,
  onGamerPush,
  onChageGamerAbility,
}: Props) => (
  <GamerCardWrap isActive={isActive} priority={priority}>
    <GamerCardStatus isBlocked={isBlocked} isKilled={isKilled} />
    <ListItem>
      <Typography
        css={css`
          background: #ddd;
          cursor: pointer;
          width: 100%;
          padding: 5px 10px;
        `}
        onClick={() => onGamerPush(id)}
        variant="h6"
      >
        {title}
      </Typography>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
    <ListItem>
      <Select
        css={css`
          width: 100%;
          .MuiInputBase-input {
            padding: 10px;
          }
        `}
        value={abilityType}
        onChange={(e: any) => onChageGamerAbility(id, e.target.value)}
      >
        {abilities.map((ability) => (
          <MenuItem key={ability} value={ability}>
            {dataAbilities[ability].name}
          </MenuItem>
        ))}
      </Select>
    </ListItem>
    <ListItem>
      <Button variant="contained" color="info" startIcon={<DeleteIcon />}>
        Вилучити
      </Button>
    </ListItem>
  </GamerCardWrap>
);
