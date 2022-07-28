/** @jsxImportSource @emotion/react */
import { ButtonProps } from "@mui/material";
import ButtonMUI from "@mui/material/Button";
import { useStyles } from "./hooks";

export const Button = ({ variant, children, ...props }: ButtonProps) => {
  const style = useStyles(variant);

  return (
    <ButtonMUI {...props} css={style}>
      {children}
    </ButtonMUI>
  );
};
