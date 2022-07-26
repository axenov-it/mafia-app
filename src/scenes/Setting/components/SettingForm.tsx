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
  const { errors, values, touched, handleChange, handleSubmit, handleBlur } =
    useForm({
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
          .MuiSvgIcon-root {
                color: #ABB0C5;
              }
          .MuiFormControl-root,
          .MuiFormLabel-root,
          .MuiInputBase-root {
            background: #1D1E26;
            font-family: 'Cuprum';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #ABB0C5;
          }
        `}
      >
        <FormControl
          css={css`
              width: 100%;
          `}
        >
          <InputLabel>
            Кількість гравців
          </InputLabel>
          <Select
            name="countGamers"
            value={values.countGamers}
            label="кількість"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.countGamers && Boolean(errors.countGamers)}
          >
            {gamerItems.map((item) => (
              <MenuItem key={item} value={item}
                css={css`
                  display: flex;
                  justify-content: center;
                  padding: 2px 91px;
                  border-radius: 5px;
                  font-family: 'Cuprum';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 20px;
                  line-height: 23px;
                  letter-spacing: 0.05em;
                  color: #ABB0C5;
                  &:hover {
                    background: linear-gradient(122.36deg, #F0CD87 2.46%, #E0B169 99%);
                    border-radius: 5px;                  
                  }
                `}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error>
            {touched.countGamers && errors.countGamers}
          </FormHelperText>
        </FormControl>


        {values.countGamers && (
          <FormControl
            css={css`
              margin-top: 20px;
              width: 100%;
            `}
          >
            <InputLabel>
              Оберіть гру
            </InputLabel>
            <Select
              name="preset"
              value={values.preset}
              label="Оберіть гру"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.preset && Boolean(errors.preset)}
            >
              {presets.map((preset) => (
                <MenuItem key={preset.id} value={preset.id}
                  css={css`
                  display: flex;
                  justify-content: center;
                  padding: 19px 37px;
                  font-family: 'Cuprum';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 27px;
                  line-height: 31px;
                  letter-spacing: 0.05em;
                  text-transform: uppercase;
                  color: #ABB0C5;
                  &:hover {
                    background: linear-gradient(122.36deg, #F0CD87 2.46%, #E0B169 99%);
                    border-radius: 5px;                  
                  }
                `}
                >
                  {preset.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error>
              {touched.preset && errors.preset}
            </FormHelperText>
          </FormControl>

        )}

      </div>
    </form>
  );
};
