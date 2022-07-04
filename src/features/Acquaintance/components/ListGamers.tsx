/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Gamer } from "./Gamer";
import { useGamers } from "../hooks/useGamers";
import { GamerCard } from "./GamerCard";

export const ListGamers = () => {
  const { gamers } = useGamers();

  return (
    <div
      css={css`
        max-width: 900px;
        padding: 50px 10px 50px 10px;
        margin: auto;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid;
          padding: 15px 15px;
          gap: 15px;
        `}
      >
        {gamers.map((gamer) => (
          <Gamer key={gamer.id} gamer={gamer} />
        ))}
      </div>
      <GamerCard />
    </div>
  );
};
