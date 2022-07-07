/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSetting } from "../hooks/useSetting";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import roles from "../../../mocks/roles.json";

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

export const SettingForm = ({ children }: any) => {
  const {
    handleSubmit,
    onSubmit,
    register,
    errors,
    handleChange,
    personName,
  } = useSetting();

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
              pattern: { value: /^[0-9]{0,2}$/, message: "Не больше 2 цыфр " },
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
        <div>
          <FormControl sx={{ mb: 3, width: "100%" }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              {...register("nameCard")}
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {roles.map((name) => (
                <MenuItem key={name.id} value={name.name}>
                  <Checkbox checked={personName.indexOf(name.name) > -1} />
                  <ListItemText primary={name.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Button type="submit" variant="outlined">
          Зберегти
        </Button>
      </form>
    </div>
  );
};
