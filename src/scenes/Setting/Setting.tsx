/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RolesList, SettingForm } from "./components";
import { useSetting } from "./hooks";

export const Setting = () => {
  const {
    onSubmit,
    onCountGamersChange,
    onPresetChange,
    gamerItems,
    presets,
    roles,
    countGamers,
  } = useSetting();

  return (
    <div
      css={css`
        padding: 0 15px;
      `}
    >
      <h2
        css={css`
          font-size: 1.7em;
          font-weight: bold;
          text-align: center;
          margin-bottom: 30px;
        `}
      >
        Встановлення конфігурації
      </h2>

      <SettingForm
        onSubmit={onSubmit}
        onCountGamersChange={onCountGamersChange}
        onPresetChange={onPresetChange}
        gamerItems={gamerItems}
        presets={presets}
      />

      {countGamers || "" ? <RolesList roles={roles} /> : ""}
    </div>
  );
};
