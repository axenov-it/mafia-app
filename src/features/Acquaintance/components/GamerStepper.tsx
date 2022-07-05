/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Gamer } from "./Gamer";
import { useGamers } from "../hooks/useGamers";

export const GamerStepper = () => {
  const { gamers } = useGamers();

  return (
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
  );
};
