import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { css } from "@emotion/react";

function App() {
  const [bool, setBool] = useState(false);

  const myStyle = css`
    border: 1px solid hotpink;
    border-radius: 8px;
    padding: 25px 50px;
    font-size: ${bool ? "28px" : "80px"};
    color: black;
    cursor: pointer;
    user-select: none;
  `;

  return (
    <div onClick={() => setBool(!bool)}>
      <h1 css={myStyle}>{bool ? "toy shikitoh" : "anma, ya creci"}</h1>
    </div>
  );
}

export default App;
