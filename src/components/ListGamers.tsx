/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AbilityTypesInterface } from "../interfaces";
import { GamerCard } from "./GamerCard";
import dataAbilities from "../mocks/abilities.json";
import { Gamer } from "../clases";

interface Props {
  gamers: ReadonlyArray<Gamer>;
  onGamerPush: (id: number) => void;
  onChageGamerAbility: (
    gamerId: number,
    abilityId: AbilityTypesInterface
  ) => void;
}

export const ListGamers = ({
  gamers,
  onGamerPush,
  onChageGamerAbility,
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
        dataAbilities={dataAbilities as any}
        onChageGamerAbility={onChageGamerAbility}
      />
    ))}
  </div>
);
