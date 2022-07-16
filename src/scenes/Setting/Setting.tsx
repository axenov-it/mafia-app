/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RolesList, SettingForm } from "./components";
import { useSetting } from "./hooks";

export const Setting = () => {
  const { onSubmit, onCountGamersChange, onPresetChange, gamerItems, presets, roles } = useSetting();

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

      <SettingForm
        onSubmit={onSubmit}
        onCountGamersChange={onCountGamersChange}
        onPresetChange={onPresetChange}
        gamerItems={gamerItems}
        presets={presets} />

      <RolesList roles={roles} />
    </div>
  );
};
