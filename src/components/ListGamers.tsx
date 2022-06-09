/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AbilityTypesInterface, NigthPushTypes } from "../interfaces";
import { GamerCard } from "./GamerCard";
import dataAbilities from "../mocks/abilities.json";
import { Gamer } from "../clases";

interface Props {
  gamers: ReadonlyArray<Gamer>;
  onGamerPush: (id: number, type: NigthPushTypes) => void;
  onGamerKill: (id: number) => void;
  onChageGamerAbility: (
    gamerId: number,
    abilityId: AbilityTypesInterface
  ) => void;
}

export const ListGamers = ({
  gamers,
  onGamerPush,
  onChageGamerAbility,
  onGamerKill,
}: Props) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
      margin: 15px -8px;
      justify-content: center;
    `}
  >
    {gamers.map((Gamer: Gamer) => (
      <GamerCard
        key={Gamer.id}
        gamer={Gamer}
        onGamerPush={onGamerPush}
        onGamerKill={onGamerKill}
        dataAbilities={dataAbilities as any}
        onChageGamerAbility={onChageGamerAbility}
      />
    ))}
  </div>
);
