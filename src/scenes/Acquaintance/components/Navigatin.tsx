/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Button } from "common/components";

interface Props {
  isStart: boolean;
  onNextGamer: () => void;
  onResetTimer: () => void;
  onStart: () => void;
}

export const Navigation = ({
  isStart,
  onNextGamer,
  onResetTimer,
  onStart,
}: Props) => (
  <div
    css={css`
      display: flex;
      position: relative;
      margin-top: 13px;
      align-items: center;
      justify-content: center;
      gap: 15px;
    `}
  >
    {isStart && (
      <>
        <Button onClick={onResetTimer} variant="outlined" color="inherit">
          Ще хвилина
        </Button>
        <Button onClick={onNextGamer} variant="outlined" color="inherit">
          Продовжити
        </Button>
      </>
    )}
    {!isStart && (
      <Button onClick={onStart} variant="outlined" color="inherit">
        Почати Знайомство
      </Button>
    )}
  </div>
);
