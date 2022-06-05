/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AbilityTypesInterface, GamerInterface } from "../interfaces";
import { GamerCard } from "./GamerCard";
import dataAbilities from "../mocks/abilities.json";

interface Props {
  gamers: ReadonlyArray<GamerInterface>;
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
    {gamers.map((Gamer: GamerInterface) => (
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
