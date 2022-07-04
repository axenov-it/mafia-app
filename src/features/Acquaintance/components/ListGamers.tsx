/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Gamer } from "./Gamer";
import { useAcquaintanceHoks} from "../hooks/useAcquaintanceHoks";

export const ListGamers = () => {
  const { area } = useAcquaintanceHoks()
  
  return (
    <div
      css={css`
        width: 100%;
        height: auto;
        background-color: #5093b3;
      `}
    >
      <div
        css={css`
          max-width: 900px;
          padding: 50px 10px 50px 10px;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
        `}
      >
        {area.map((item) => (
          <Gamer key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
