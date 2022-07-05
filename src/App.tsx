/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Header, Scene } from "./features";

function App() {
  return (
    <div
      css={css`
        max-width: 820px;
        margin: 0 auto;
        * {
          box-sizing: border-box;
        }
      `}
    >
      <Header />
      <Scene />
    </div>
  );
}

export default App;
