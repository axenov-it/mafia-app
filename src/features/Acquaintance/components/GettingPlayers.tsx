/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {Players} from "./Players";

export const GettingPlayers = () =>   {

const numberPlayers = 14;
const area = [];
for (let i = 0; i < numberPlayers; i++) {
  area.push({ id: i + 1, isActiv: false });
  if (area[i].id === 1) {
    area[i].isActiv = true;
  }
}
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
      {area.map((item) => (<Players key={item.id} item ={item}/>))}
    </div>
  </div>
)};