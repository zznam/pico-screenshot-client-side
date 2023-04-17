import React from "react";
import "./styles.css";

import * as pico from "@gripeless/pico";

export default function App() {
  const [image, setImage] = React.useState();
  const takeImage = () => {
    (async () => {
      const res = await pico.dataURL(window);
      console.log(res);
      setImage(res.value);
    })();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={takeImage}>Take Image</button>

      <h3 style={{ background: "red", borderRadius: "50%" }}>Nice Hello</h3>

      <img
        alt="data"
        src={
          image ||
          "https://img.xianjichina.com/editer/20210903/image/f638334b7e558f96bd4ff64cf3155293.jpg"
        }
      />
    </div>
  );
}
