/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "../hooks/useForm";
import { SettingRolesSelect } from "./SettingRolesSelect";
import { CounterRoles } from "./CounterRoles";

interface Props {
  onSubmit: (data: any) => void;
}

export const SettingForm = ({ onSubmit }: Props) => {
  const { errors, values, touched, handleChange, handleSubmit } = useForm({
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <CounterRoles
        numberGamers={Number(values.countGamers)}
        numberRoles={values.roles.length}
      />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row-reverse;
          flex: star;
          @media (max-width: 390px) {
            flex-direction: column;
            align-items: flex-start;
          }
        `}
      >
        <TextField
          autoComplete="off"
          fullWidth
          sx={{ mb: "15px" }}
          name="countGamers"
          onChange={handleChange}
          label={"Кількість гравців"}
          value={values.countGamers}
          error={touched.countGamers && Boolean(errors.countGamers)}
          helperText={touched.countGamers && errors.countGamers}
        />
      </div>

      <div>
        <SettingRolesSelect
          isOpen={!!values.countGamers}
          onChange={handleChange}
          value={values.roles}
          error={touched.roles && Boolean(errors.roles)}
          helperText={touched.roles && errors.roles}
        />
      </div>
      <Button type="submit" variant="outlined">
        Зберегти
      </Button>
    </form>
  );
};
