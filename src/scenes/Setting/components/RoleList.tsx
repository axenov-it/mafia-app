/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RoleInterface } from "common/interfaces";

interface Props {
  roles: RoleInterface[];
}

export const RolesList = ({ roles }: Props) => (
  <div
    css={css`
      max-width: 500px;
      margin: 0 auto;
      h3,
      li {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #abb0c5;
      }
    `}
  >
    <h3>Роли</h3>
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      `}
    >
      {roles.map((role, index) => (
        <li key={index}>
          <span
            css={css`
              margin-right: 5px;
            `}
          >
            {role.name}
            {index < roles.length - 1 && ","}
          </span>
        </li>
      ))}
    </div>
  </div>
);
