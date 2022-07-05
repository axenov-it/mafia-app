/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Pagination from "@mui/material/Pagination";
import { useGamers } from "../hooks/useGamers";

export const GamerStepper = () => {
  const { gamers } = useGamers();

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid;
        padding: 15px 15px;
        gap: 15px;
        .MuiPaginationItem-root {
          height: 70px;
          width: 50px;
        }
      `}
    >
      <Pagination
        hideNextButton
        hidePrevButton
        count={gamers.length}
        variant="outlined"
        shape="rounded"
        page={1}
        siblingCount={0}
      />
    </div>
  );
};
