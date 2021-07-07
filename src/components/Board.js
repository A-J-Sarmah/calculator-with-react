import React from "react";

function Board({ numberClick, operationClick, backButtonClick, calculate }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
  const operations = ["+", "-", "/", "*"];
  return (
    <div className="container-lg mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div
            className="w-100 py-5 bg-dark text-light display-5 rounded-top text-right"
            id="input"
          ></div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-6 d-flex">
          {operations.map((operation) => {
            return (
              <div
                className="calc-button text-center border border-dark display-5 py-2"
                key={operation}
                id={operation}
                onClick={(e) => {
                  operationClick(e.target.id);
                }}
              >
                {operation}
              </div>
            );
          })}
          <div
            className="calc-button text-center border border-dark display-5 py-2"
            id="back"
            onClick={backButtonClick}
          >
            back
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-6 d-flex flex-wrap">
          {numbers.map((number) => {
            return (
              <div
                className="
              number-btn
              w-25
              text-center
              border border-dark
              display-5
              py-2
            "
                key={number}
                id={number}
                onClick={(e) => {
                  numberClick(e.target.id);
                }}
              >
                {number}
              </div>
            );
          })}
          <div
            className="
              number-btn
              w-25
              text-center
              border border-dark
              display-5
              py-2
            "
            id="="
            onClick={calculate}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
