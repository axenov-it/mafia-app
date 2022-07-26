/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import SelectMUI from "@mui/material/Select";
import { FormHelperText, SelectProps } from "@mui/material";

interface Props {
  errorText?: string;
  isRender?: boolean;
}

export const Select = ({
  label,
  error,
  errorText,
  children,
  isRender = true,
  ...props
}: Props & SelectProps) =>
  isRender ? (
    <FormControl
      css={css`
        width: 100%;
        background: #1d1e26;
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin-bottom: 30px;
        border-radius: 5px;

        .MuiInputLabel-root,
        .MuiInputLabel-root.Mui-focused,
        .MuiSvgIcon-root,
        .MuiInputBase-root {
          color: #abb0c5;
        }

        .MuiOutlinedInput-notchedOutline {
          border: none;
        }

        .MuiSelect-select {
          padding: 15px !important;
        }
      `}
    >
      <InputLabel>{label}</InputLabel>
      <SelectMUI
        {...props}
        MenuProps={{
          sx: {
            ".MuiPaper-root": { marginTop: "15px", background: "none" },
            ".MuiList-root": { backgroundColor: "#1D1E26" },
          },
        }}
      >
        {children}
      </SelectMUI>
      <FormHelperText error>{error && errorText}</FormHelperText>
    </FormControl>
  ) : (
    <></>
  );
