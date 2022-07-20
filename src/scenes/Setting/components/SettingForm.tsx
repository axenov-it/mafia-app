/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PresetInterface } from "common/interfaces";
import FormHelperText from "@mui/material/FormHelperText";

interface Props {
  onSubmit: (data: any) => void;
  onPresetChange: (presetId: number) => void;
  onCountGamersChange: (count: number) => void;
  gamerItems: number[];
  presets: PresetInterface[];
}

export const SettingForm = ({
  onSubmit,
  onCountGamersChange,
  onPresetChange,
  gamerItems,
  presets,
}: Props) => {
  const {
    errors,
    values,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useForm({
    onSubmit,
  });

  useEffect(() => {
    onCountGamersChange(Number(values.countGamers));
  }, [values.countGamers]);

  useEffect(() => {
    onPresetChange(Number(values.preset));
  }, [values.preset]);

  return (
    <form onSubmit={handleSubmit}>
      <div
        css={css`
          max-width: 500px;
          margin: 0 auto;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            @media (max-width: 500px) {
              flex-direction: column-reverse;
            }
          `}
        >
          <FormControl
            css={css`
              width: 100%;
              align-self: flex-start;
            `}
          >
            <InputLabel>Кількість</InputLabel>
            <Select
              name="countGamers"
              value={values.countGamers}
              label="кількість"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.countGamers && Boolean(errors.countGamers)}
            >
              {gamerItems.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error>
              {" "}
              {touched.countGamers && errors.countGamers}
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            variant="outlined"
            css={css`
              height: 56px;
              align-self: flex-start;
            `}
          >
            Зберегти
          </Button>
        </div>
        {values.countGamers && (
          <FormControl
            css={css`
              margin-top: 20px;
              width: 100%;
            `}
          >
            <InputLabel>Оберіть гру</InputLabel>
            <Select
              name="preset"
              value={values.preset}
              label="Оберіть гру"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.preset && Boolean(errors.preset)}
            >
              {presets.map((preset) => (
                <MenuItem key={preset.id} value={preset.id}>
                  {preset.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error>
              {" "}
              {touched.preset && errors.preset}
            </FormHelperText>
          </FormControl>
        )}
      </div>
    </form>
  );
};
