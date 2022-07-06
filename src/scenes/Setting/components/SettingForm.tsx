/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSetting } from "../hooks/useSetting";

export const SettingForm = ({ children }: any) => {
  const { handleSubmit, onSubmit, register, errors } = useSetting();

  return (
    <div>
      <h2
        css={css`
          font-size: 30px;
          font-weight: bold;
        `}
      >
        Settings scene
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          css={css`
            width: 600px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row-reverse;
            flex: star;
          `}
        >
          <p
            css={css`
              font-size: 20px;
              font-weight: bold;
            `}
          >
            Гравців / Ролей 12/8
          </p>
          <TextField
            {...register("numberPlayers", {
              required: "Поле обов'язково до заповнення",
              pattern: { value: /^[0-9]{2}$/, message: "Не больше 2 цыфр " },
            })}
            label={"Кількість гравців"}
            id="margin-none"
          />
        </div>
        <p
          css={css`
            margin: 0px;
            height: 30px;
            color: red;
            line-height: 20px;
            text-decoration: underline;
          `}
        >
          {errors.numberPlayers?.message}
        </p>
        {children}
        <Button type="submit" variant="outlined">
          Зберегти
        </Button>
      </form>
    </div>
  );
};
