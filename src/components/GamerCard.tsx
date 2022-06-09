/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
  AbilityInterface,
  AbilityTypesInterface,
  NigthPushTypes,
} from "../interfaces";
import { GamerCardWrap } from "./GamerCardWrap";
import NextPlanIcon from "@mui/icons-material/NextPlan";

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
  onGamerPush: (gamerId: number, type: NigthPushTypes) => void;
  onGamerKill: (gamerId: number) => void;
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
  onGamerKill,
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
          position: relative;
          z-index: 20;
          ${isActive &&
          css`
            box-shadow: 0 0 4px 4px #1976d263;
            border: 2px solid #1976d2;
          `}
        `}
        onClick={() => onGamerPush(id, "push")}
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
          max-width: 210px;
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
      <Button
        css={css`
          margin-right: 5px;
        `}
        variant="contained"
        color="info"
        startIcon={<DeleteIcon />}
        onClick={() => onGamerKill(id)}
      />
      <Button
        onClick={() => onGamerPush(id, "next")}
        variant="contained"
        color="info"
        startIcon={<NextPlanIcon />}
      />
    </ListItem>
  </GamerCardWrap>
);
