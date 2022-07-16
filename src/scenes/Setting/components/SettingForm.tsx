/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PresetInterface } from "common/interfaces";

interface Props {
  onSubmit: (data: any) => void;
  onPresetChange: (presetId: number) => void;
  onCountGamersChange: (count: number) => void;
  gamerItems: number[];
  presets: PresetInterface[];
}

export const SettingForm = ({ onSubmit, onCountGamersChange, onPresetChange, gamerItems, presets }: Props) => {
  const { errors, values, touched, handleChange, handleSubmit } = useForm({
    onSubmit
  });

  useEffect(() => {
    onCountGamersChange(Number(values.countGamers))
  }, [values.countGamers])

  useEffect(() => {
    onPresetChange(Number(values.preset))
  }, [values.preset])

  return (
    <form onSubmit={handleSubmit}>
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
        <FormControl fullWidth>
          <InputLabel>Кількість</InputLabel>
          <Select
            name="countGamers"
            value={values.countGamers}
            label="кількість"
            onChange={handleChange}
          >
            {gamerItems.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
          </Select>
        </FormControl>
        {values.countGamers && <FormControl fullWidth>
          <InputLabel>Оберіть гру</InputLabel>
          <Select
            name="preset"
            value={values.preset}
            label="Оберіть гру"
            onChange={handleChange}
          >
            {presets.map((preset) => <MenuItem key={preset.id} value={preset.id}>{preset.name}</MenuItem>)}
          </Select>
        </FormControl>}


      </div>

      <div>

      </div>
      <Button type="submit" variant="outlined">
        Зберегти
      </Button>
    </form >
  );
};
