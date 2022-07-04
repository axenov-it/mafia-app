/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Acquaintance } from "./features";

function App() {

  return (
    <div><Acquaintance/>
    <div
      css={css`
        max-width: 900px;
        margin: auto;
        background: #ddd;
        padding: 15px;
      `}
    >

      <h2>MAFIA GAME</h2>
    

    </div>
    </div>
  );
}

export default App;
