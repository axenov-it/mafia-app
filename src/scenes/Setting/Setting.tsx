/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RolesList, SettingForm } from "./components";
import { useSetting } from "./hooks";
import Button from "@mui/material/Button";


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
        background: #11131A;
        color: #fff;
        text-align: center;
      `}
    >
      <h2
        css={css`
          font-family: 'Cuprum';
          font-style: normal;
          font-weight: 400;
          font-size: 35px;
          line-height: 40px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #ABB0C5;
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
      />

      {countGamers ? <RolesList roles={roles} /> : ""}

      <Button
        type="submit"
        variant="outlined"
        css={css`
          width: 200px;
          border: 2px solid #7c7070ab;
          color: #0C0D12;
          background: linear-gradient(90deg, #F0CD87 0%, #E0B169 100%);
          border-radius: 5px;
          font-family: 'Cuprum';
          font-size: 24px;
          letter-spacing: 0.1em;
          line-height: 28px;
          margin: 70px auto;
          padding: 15px 19px;
        `}
      >
        Зберегти
      </Button>

    </div>
  );
};
