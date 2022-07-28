/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Scene } from "common/components";

function App() {
  return (
    <div
      css={css`
        max-width: 820px;
        margin: 0 auto;
      `}
    >
      <Scene />
    </div>
  );
}

export default App;
