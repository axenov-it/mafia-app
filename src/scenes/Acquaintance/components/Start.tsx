/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Button } from "@mui/material";

interface Props {
  isStart: boolean;
  onStartGame: () => void;
}

export const Start = ({ isStart, onStartGame }: Props) =>
  !isStart ? (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Button
        onClick={onStartGame}
        css={css`
          font-size: 22px;
        `}
        variant="outlined"
        color="inherit"
        startIcon={
          <PlayCircleFilledIcon
            css={css`
              width: 60px;
              height: 60px;
            `}
          />
        }
      >
        Почати Знайомство
      </Button>
    </div>
  ) : (
    <></>
  );
