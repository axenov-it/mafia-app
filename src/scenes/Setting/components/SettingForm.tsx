/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSetting, useFields } from "../hooks";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import roles from "mocks/roles.json";
import { Box } from "@mui/system";
import { Chip } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const SettingForm = () => {
  const {
    handleSubmit,
    onSubmit,
    register,
    errors,
    onRoleChange,
    roleIds,
    onChageNumberGamers,
    numberGamers,
  } = useSetting();

  const fields = useFields(register);

  return (
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
          Гравців / Ролей {roleIds.length}/{numberGamers}
        </p>
        <TextField
          {...fields.numberGamers}
          onChange={onChageNumberGamers}
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
        {errors.numberGamers?.message}
      </p>
      <div>
        <FormControl sx={{ mb: 3, width: "100%" }}>
          <InputLabel id="input-role-label">Оберіть ролі</InputLabel>
          <Select
            {...register("roles")}
            labelId="input-role-label"
            multiple
            value={roleIds}
            onChange={onRoleChange}
            input={<OutlinedInput label="Оберіть ролі" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((roleId) => (
                  <Chip
                    key={roleId}
                    label={roles.find((role) => role.id === roleId)?.name}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {roles.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                <Checkbox checked={roleIds.indexOf(id) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Button type="submit" variant="outlined">
        Зберегти
      </Button>
    </form>
  );
};
