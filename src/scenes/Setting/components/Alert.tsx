/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AlertMUI from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const Alert = () => {

  return (
    <div
      css={css`
        animation-duration: 0.5s;
        animation-name:slidein;
        @keyframes slidein {
          from {
            transform: translateY(100%);
            opacity: 0;
          }

          to {
            transform: translateY(0%);
            opacity: 1;
          }
        }
      `}
    >
      <Stack sx={{ mt: 5, width: '100%' }}>
        <AlertMUI variant="filled" severity="success">
          Готово!
        </AlertMUI>
      </Stack>
    </div>
  )
}
