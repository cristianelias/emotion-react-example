import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { css } from "@emotion/react";

function App() {
  return (
    <div
      css={css`
        font-size: 28px;
        color: white;
      `}
    >
      {" "}
      Ejemplo estilos emotion
    </div>
  );
}

export default App;
