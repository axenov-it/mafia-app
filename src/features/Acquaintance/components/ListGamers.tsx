/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Player } from "./Player";
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
          max-width: 1200px;
          padding: 50px 10px 50px 10px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
        `}
      >
        {area.map((item) => (
          <Player key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
