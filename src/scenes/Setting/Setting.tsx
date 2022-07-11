/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SettingForm } from "./components";
import { useSetting } from "./hooks";

export const Setting = () => {
  const { onSubmit } = useSetting();

  return (
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
        Встановлення конфігурації
      </h2>
      <SettingForm onSubmit={onSubmit} />
    </div>
  );
};
