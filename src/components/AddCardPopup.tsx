/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Dialog from "@mui/material/Dialog";
import MenuItem from "@mui/material/MenuItem";
import { Button, DialogContent, TextField } from "@mui/material";
import { useState } from "react";
import { RoleInterface } from "../interfaces";

export interface DataCardInterface {
  cardNumber: number;
  roleId: number;
}

export interface Props {
  open: boolean;
  onSubmit: (cardNumber: number, roleId: number) => void;
  onClose: () => void;
  roles: ReadonlyArray<RoleInterface>;
  numbers: ReadonlyArray<number>;
}

const initialState = { cardNumber: "", roleId: "" };

export function AddCardPopup({
  onClose,
  onSubmit,
  open,
  roles,
  numbers,
}: Props) {
  const [state, setState] = useState(initialState);

  const handleClose = () => {
    onClose();
    setState(initialState);
  };

  const handleSubmit = () => {
    if (!state.cardNumber || !state.roleId) return;

    onSubmit(Number(state.cardNumber), Number(state.roleId));
    handleClose();
  };

  const onChange = (event: any) => {
    const key = event.target.name;
    const value = event.target.value;

    setState({ ...state, [key]: value });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogContent
        css={css`
          display: flex;
          flex-direction: column;
          min-width: 250px;
          .MuiFormControl-root {
            margin-bottom: 15px;
          }
        `}
      >
        <TextField
          select
          label="Номер гравця"
          name="cardNumber"
          onChange={onChange}
          value={state.cardNumber}
        >
          {numbers.map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Роль гравця"
          name="roleId"
          value={state.roleId}
          onChange={onChange}
        >
          {roles.map((role) => (
            <MenuItem key={role.id} value={role.id}>
              {role.name}
            </MenuItem>
          ))}
        </TextField>

        <Button onClick={handleSubmit} variant="contained">
          Додати
        </Button>
      </DialogContent>
    </Dialog>
  );
}
