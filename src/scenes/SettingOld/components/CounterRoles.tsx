/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  numberGamers: number;
  numberRoles: number;
}

export const CounterRoles = ({ numberGamers, numberRoles }: Props) => {
  return (
    <div
      css={css`
        margin-bottom: 30px;

        p {
          font-size: 20px;
          font-weight: bold;
          margin: 0px 0 10px 0;
        }
      `}
    >
      <p>Гравців : {numberGamers}</p>
      <p>Ролей : {numberRoles}</p>
    </div>
  );
};
