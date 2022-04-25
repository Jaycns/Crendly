import "./App.css";
import Cmage from "./images/c_logo.png";
import { MdOutlineRefresh } from "react-icons/md";
import { useState, useEffect } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState([]);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setRandomNumber(generateArray());
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    alert("A value was submitted");
  }
  function handleClick(e) {
    if (array.length <= 5) {
      setArray([...array, e.target.value]);
      console.log(array);
    }
    // createArray();
    // setArray(array.push([...digit]));
  }

  function generateArray() {
    let arr = [];

    while (arr.length !== 10) {
      let randomNumber = Math.floor(Math.random() * 10);
      if (!arr.includes(randomNumber)) arr.push(randomNumber);
    }

    return arr;
  }
  function handleDelete() {
    setArray(array.slice(0, -1));
  }
  function handleClear() {
    setArray([]);
  }
  function handleBtnRefresh() {
    setRandomNumber(generateArray());
  }

  return (
    <div className="container">
      <div className="box">
        <div className="box-wrap">
          <p className="box-p">
            Don't have an account?{" "}
            <a href="https://github.com/" className="box-a">
              Sign Up
            </a>
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-head">
              <h1>Sign in to your account</h1>
              <p>Guaranteed extra credits with our easy to use App</p>
            </div>
            <div className="form-wrapper">
              <label className="lab">Username</label>
              <input
                className="form-control"
                type="email"
                placeholder="Username or Email"
                name="email"
              />
            </div>
            <div className="form-wrapper">
              <label className="lab">Passcode</label>
              <div className="input-boxes">
                <input
                  disabled
                  className="inbox"
                  value={array[0] || ""}
                  maxLength="1"
                />
                <input
                  disabled
                  className="inbox"
                  value={array[1] || ""}
                  maxLength="1"
                />
                <input
                  disabled
                  className="inbox"
                  value={array[2] || ""}
                  maxLength="1"
                />
                <input
                  disabled
                  className="inbox"
                  value={array[3] || ""}
                  maxLength="1"
                />
                <input
                  disabled
                  className="inbox"
                  value={array[4] || ""}
                  maxLength="1"
                />
                <input
                  disabled
                  className="inbox"
                  value={array[5] || ""}
                  maxLength="1"
                />
              </div>
            </div>
            <div className="forget">
              <button className="for-btn">Forgot Passcode?</button>
            </div>
          </form>
          <div className="wrapper">
            <div className="login">
              <button type="button" className="button">
                Login
              </button>
            </div>
            <div className="key-container">
              <div className="key-holder">
                <button
                  value={randomNumber[0]}
                  className="keypad"
                  onClick={handleClick}
                >
                  {randomNumber[0]}
                </button>
                <button
                  className="keypad"
                  value={randomNumber[1]}
                  onClick={handleClick}
                >
                  {randomNumber[1]}
                </button>
                <button
                  className="keypad"
                  value={randomNumber[2]}
                  onClick={handleClick}
                >
                  {randomNumber[2]}
                </button>
                <button
                  className="keypad"
                  value={randomNumber[3]}
                  onClick={handleClick}
                >
                  {randomNumber[3]}
                </button>
              </div>
              <div className="key-holder">
                <button
                  className="keypad"
                  value={randomNumber[4]}
                  onClick={handleClick}
                >
                  {randomNumber[4]}
                </button>
                <button
                  value={randomNumber[5]}
                  className="keypad"
                  onClick={handleClick}
                >
                  {randomNumber[5]}
                </button>
                <button
                  className="keypad"
                  value={randomNumber[6]}
                  onClick={handleClick}
                >
                  {randomNumber[6]}
                </button>
                <button
                  className="keypad"
                  value={randomNumber[7]}
                  onClick={handleClick}
                >
                  {randomNumber[7]}
                </button>
              </div>
              <div className="key-holder">
                <button
                  value={randomNumber[8]}
                  className="keypad"
                  onClick={handleClick}
                >
                  {randomNumber[8]}
                </button>
                <button
                  className="keypad"
                  value={randomNumber[9]}
                  onClick={handleClick}
                >
                  {randomNumber[9]}
                </button>
                <button className="refresh-btn" onClick={handleBtnRefresh}>
                  <MdOutlineRefresh className="svg" />
                </button>
              </div>
              <div className="key-hold">
                <button className="delete" onClick={handleDelete}>
                  Delete
                </button>
                <button className="clear" onClick={handleClear}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-box">
        <div className="c-container">
          <img src={Cmage} alt="Die" />
          <div className="c-text">
            <h1 className="c-tit">
              You're in <span className="c-span">Control</span>
            </h1>
            <p className="c-p">Control your profit on what you lend out</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
