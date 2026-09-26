import "./styles.css";

import * as pico from "@gripeless/pico";

import { ReactComponent as Cat } from './kitten.svg'
import React from "react";

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
      <img alt="star" src="https://d3h306b9h45yiz.cloudfront.net/8202_b40f60b6a2.png" x="-6.9" y="-6.9" height="13.8" width="13.8"></img>

      <img
        alt="data"
        src={
          "https://img.xianjichina.com/editer/20210903/image/f638334b7e558f96bd4ff64cf3155293.jpg"
        }
      />
      <div className="container">
        <Cat></Cat>
      </div>
      {image && (
        <img
          alt="data"
          src={
            image
          }
        />
      )}
    </div>
  );
}
