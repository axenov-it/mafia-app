/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "common/components";
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
        padding: 15px;
        background: #11131a;
        color: #fff;
        text-align: center;
      `}
    >
      <h2
        css={css`
          font-family: "Cuprum";
          font-style: normal;
          font-weight: 400;
          font-size: 35px;
          line-height: 40px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #abb0c5;
        `}
      >
        Налаштування
      </h2>

      <SettingForm
        onSubmit={onSubmit}
        onCountGamersChange={onCountGamersChange}
        onPresetChange={onPresetChange}
        gamerItems={gamerItems}
        presets={presets}
      >
        {countGamers ? <RolesList roles={roles} /> : ""}
        <Button type="submit">Зберегти</Button>
      </SettingForm>
    </div>
  );
};
