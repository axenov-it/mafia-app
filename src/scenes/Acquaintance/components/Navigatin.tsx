/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button } from "@mui/material";

interface Props {
  isStart: boolean;
  onNextGamer: () => void;
  onResetTimer: () => void;
}

export const Navigation = ({ isStart, onNextGamer, onResetTimer }: Props) =>
  isStart ? (
    <div
      css={css`
        display: flex;
        position: relative;
        margin-top: 30px;
        align-items: center;
        justify-content: center;
        gap: 15px;
      `}
    >
      <Button
        onClick={onResetTimer}
        variant="outlined"
        color="inherit"
        startIcon={<RestartAltIcon />}
      >
        Ще час
      </Button>
      <Button
        onClick={onNextGamer}
        variant="outlined"
        color="inherit"
        startIcon={<ArrowCircleRightIcon />}
      >
        Продовжити
      </Button>
    </div>
  ) : (
    <></>
  );
