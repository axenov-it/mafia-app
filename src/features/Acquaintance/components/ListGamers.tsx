/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Gamer } from "./Gamer";
import { useAcquaintanceHoks } from "../hooks/useAcquaintanceHoks";
import { GamerCard } from "./GamerCard";

export const ListGamers = () => {
  const { area } = useAcquaintanceHoks();

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
        {area.map((item) => (
          <Gamer key={item.id} item={item} />
        ))}
      </div>
      <GamerCard />
    </div>
  );
};
