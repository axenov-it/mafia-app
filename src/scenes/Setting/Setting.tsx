/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SettingForm } from "./components";

export const Setting = () => (
  <div
    css={css`
      padding: 0 15px;
    `}
  >
    <h2
      css={css`
        font-size: 30px;
        font-weight: bold;
      `}
    >
      Вибір ролей
    </h2>
    <SettingForm />
  </div>
);
