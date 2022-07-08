/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SettingForm } from "./components";

export const Setting = () => (
  <div>
    <h2
      css={css`
        font-size: 30px;
        font-weight: bold;
      `}
    >
      Settings scene
    </h2>
    <SettingForm />
  </div>
);
