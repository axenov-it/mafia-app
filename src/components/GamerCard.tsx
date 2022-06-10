/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
  AbilityInterface,
  NigthPushTypes,
  OnChageGamerAbilityInterface,
} from "../interfaces";
import { GamerCardWrap } from "./GamerCardWrap";
import NextPlanIcon from "@mui/icons-material/NextPlan";

import { Button, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import GroupIcon from "@mui/icons-material/Group";
import DeleteIcon from "@mui/icons-material/Delete";
import { GamerCardStatus } from "./GamerCardStatus";
import { Gamer } from "../clases";
import { GamerCardTitle } from "./GamerCardTitle";
import { GamerCardSelect } from "./GamerCardSelect";

interface Props {
  gamer: Gamer;
  dataAbilities: AbilityInterface;
  onGamerPush: (gamerId: number, type: NigthPushTypes) => void;
  onGamerKill: (gamerId: number) => void;
  onChageGamerAbility: OnChageGamerAbilityInterface;
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
      <GamerCardTitle
        isActive={isActive}
        onClick={() => onGamerPush(id, "push")}
        title={title}
      />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
    <ListItem>
      <GamerCardSelect
        abilities={abilities}
        dataAbilities={dataAbilities}
        onChange={onChageGamerAbility(id)}
        value={abilityType}
      />
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
