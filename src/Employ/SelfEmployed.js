import React, { useState } from "react";

function SelfEmployed() {
  const [op, setOp] = useState("");
  function handleClick(e) {
    setOp(e.target.getAttribute("value"));
    console.log({ value: e.target.getAttribute("value") });
  }
  return (
    <div className="employed">
      <hr className="status-line" />
      <div className="form-wrapper">
        <label className="lab">What is your occupation?</label>
        <input
          type="text"
          className="form-control"
          placeholder="Your occupation"
        />
      </div>
      <div className="form-wrapper">
        <label className="lab">What is your salary range</label>
        <input
          type="select"
          className="form-control"
          placeholder="Salary range"
        />
      </div>
      <div className="status-container">
        <h6>Are you politically exposed?</h6>
        <div className="status">
          <div
            value="Yes, I am"
            className="status-holder"
            onClick={handleClick}
            style={{
              background: op === "Yes, I am" ? "rgb(46, 189, 122)" : "none",
            }}
          >
            Yes, I am
          </div>
          <div
            value="No, I am not"
            className="status-holder"
            onClick={handleClick}
            style={{
              background: op === "No, I am not" ? "rgb(46, 189, 122)" : "none",
            }}
          >
            No, I am not
          </div>
        </div>
      </div>
      <div className="login">
        <button type="button" className="butt">
          Next
        </button>
      </div>
    </div>
  );
}

export default SelfEmployed;
