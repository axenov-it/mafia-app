/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  numberGamers: number;
  roleIds: number;
}

export const CounterRoles = ({ numberGamers, roleIds }: Props) => {
  return (
    <div
      css={css`
        p {
          font-size: 20px;
          font-weight: bold;
          margin: 0px;
        }
      `}
    >
      <p>Гравців : {numberGamers}</p>
      <p>Ролей : {roleIds}</p>
    </div>
  );
};
