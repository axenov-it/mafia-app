/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RoleInterface } from "common/interfaces";

interface Props {
  roles: RoleInterface[];
}

export const RolesList = ({ roles }: Props) => {
  return (
    <div
      css={css`
        max-width: 500px;
        margin: 0 auto;
      `}
    >
      <h3>Роли</h3>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            font-size: 17px;
            font-weight: 500;
            text-transform: capitalize;
          }
        `}
      >
        {roles.map((role, index) => (
          <li key={index}>{role.name}</li>
        ))}
      </div>
    </div>
  );
};
