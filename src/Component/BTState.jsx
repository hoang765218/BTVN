import React, { Component } from "react";
import style from "./BTState.module.css";
export default class BTState extends Component {
  state = {
    srcImg: "./img/v1.png",
  };
  render() {
    return (
      <div className={style["containerr"]}>
        <div className={style["title"]}>
          <h3>TRY GLASSES APP ONLINE</h3>
        </div>
        <div className=" row">
          <div className="col-6">
            <img src="./img/model.jpg" width="400px" alt="" />
          </div>
          <div className={`col-6 ${style["model-right"]}`}>
            <img src="./img/model.jpg" width="400px" alt="" />
            <img className={style["virtual-glass"]} src={this.state.srcImg} />
          </div>
        </div>
        <div className={style["glass-model"]}>
          <div className={style["glass-wrap"]}>
            <img
              src="./img/g1.jpg"
              alt="..."
              onClick={() => {
                this.setState({ srcImg: "./img/v1.png" });
              }}
            />
            <img
              src="./img/g2.jpg"
              alt="..."
              onClick={() => {
                this.setState({ srcImg: "./img/v2.png" });
              }}
            />
            <img
              src="./img/g3.jpg"
              alt="..."
              onClick={() => {
                this.setState({ srcImg: "./img/v3.png" });
              }}
            />
            <img
              src="./img/g4.jpg"
              alt="..."
              onClick={() => {
                this.setState({ srcImg: "./img/v4.png" });
              }}
            />
            <img
              src="./img/g5.jpg"
              alt="..."
              onClick={() => {
                this.setState({ srcImg: "./img/v5.png" });
              }}
            />
            <img
              src="./img/g6.jpg"
              alt="..."
              onClick={() => {
                this.setState({ srcImg: "./img/v6.png" });
              }}
            />
            <img
              src="./img/g7.jpg"
              alt="..."
              onClick={() => {
                this.setState({ srcImg: "./img/v7.png" });
              }}
            />
            <img
              src="./img/g8.jpg"
              alt="..."
              onClick={() => {
                this.setState({ srcImg: "./img/v8.png" });
              }}
            />
            <img
              src="./img/g9.jpg"
              alt="..."
              onClick={() => {
                this.setState({ srcImg: "./img/v9.png" });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
