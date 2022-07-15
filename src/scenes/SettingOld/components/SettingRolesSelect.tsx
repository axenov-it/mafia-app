/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import roles from "mocks/roles.json";
import { SettingRolesChip } from "./SettingRolesChip";
import Checkbox from "@mui/material/Checkbox";
import { FormHelperText } from "@mui/material";

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

interface Props {
  onChange: (data: any) => void;
  value: string[];
  helperText: any;
  isOpen: boolean;
  error: any;
}

export const SettingRolesSelect = ({
  onChange,
  value,
  isOpen,
  error,
  helperText,
}: Props) =>
  isOpen ? (
    <FormControl
      sx={{ mb: 3, width: "100%" }}
      css={css`
        animation-duration: 0.5s;
        animation-name: ${isOpen ? "slidein" : null};
        @keyframes slidein {
          from {
            transform: translateY(100%);
            opacity: 0;
          }

          to {
            transform: translateY(0%);
            opacity: 1;
          }
        }
      `}
    >
      <InputLabel id="input-role-label">Оберіть ролі</InputLabel>

      <Select
        name="roles"
        error={Boolean(error)}
        labelId="input-role-label"
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label="Оберіть ролі" />}
        renderValue={(selected) => <SettingRolesChip selected={selected} />}
        MenuProps={MenuProps}
      >
        {roles.map(({ id, name }) => (
          <MenuItem key={id} value={id}>
            <Checkbox checked={value.indexOf(id) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
      <FormHelperText
        css={css`
          color: red;
        `}
      >
        {helperText}
      </FormHelperText>
    </FormControl>
  ) : (
    <></>
  );
