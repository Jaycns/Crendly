import React, { useState } from "react";
import "../App.css";
import Cmage from "../images/c_logo.png";
import wavy from "../images/wavy.png";
import divback from "../images/divback.png";
import Employed from "./employed";
import UnEmployed from "./Unemployed";
import SelfEmployed from "./SelfEmployed";
import { Link } from "react-router-dom";
function Employment() {
  const [op, setOp] = useState("");
  function handleClick(e) {
    setOp(e.target.getAttribute("value"));
    console.log({ value: e.target.getAttribute("value") });
  }
  return (
    <div className="container">
      <div className="box">
        <div className="box-wrap">
          <p className="box-p">
            Don't have an account?
            <a href="https://github.com/" className="box-a">
              Sign Up
            </a>
          </p>
          <form className="form">
            <div className="form-head">
              <h1>Employment Status</h1>
              <p>Please provide your employment information.</p>
            </div>
            <div className="">
              <h5 className="lab">What is your employment status?</h5>
              <div className="status">
                <div
                  value="Employed"
                  className="status-holder"
                  onClick={handleClick}
                  style={{
                    background:
                      op === "Employed" ? "rgb(46, 189, 122)" : "none",
                  }}
                >
                  Employed
                </div>
                <div
                  value="Self-Employed"
                  className="status-holder"
                  onClick={handleClick}
                  style={{
                    background:
                      op === "Self-Employed" ? "rgb(46, 189, 122)" : "none",
                  }}
                >
                  Self-Employed
                </div>
                <div
                  value="UnEmployed"
                  className="status-holder"
                  onClick={handleClick}
                  style={{
                    background:
                      op === "UnEmployed" ? "rgb(46, 189, 122)" : "none",
                  }}
                >
                  UnEmployed
                </div>
              </div>
            </div>
            {op === "" && (
              <div className="login">
                <button type="button" className="butt" disabled>
                  Next
                </button>
              </div>
            )}
            {op === "Employed" ? <Employed /> : ""}
            {op === "Self-Employed" ? <SelfEmployed /> : ""}
            {op === "UnEmployed" ? <UnEmployed /> : ""}
          </form>
        </div>
        <img src={wavy} alt="fish" className="bubble" />
      </div>
      <div className="c-box">
        <div className="c-container">
          <Link to="/">
            <img src={Cmage} alt="Die" />
          </Link>
          <div className="c-text">
            <h1 className="c-tit">
              A place for
              <span className="c-span">
                <></> Social <br /> lending
              </span>
            </h1>
            <p className="c-p">
              A platform where real people can lend money to real people
            </p>
            <hr />
          </div>
          <div className="advert">
            <img src={divback} alt="nails" className="divback" />
            <p className="advert-p">
              Advert <br /> placement
            </p>
            <button className="advert-button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employment;
