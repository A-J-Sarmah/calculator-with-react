/* eslint-disable no-eval */
import Navbar from "./Navbar";
import Board from "./Board";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    display();
  }, [data]);
  //click on numbers
  function numberClick(id) {
    const element = document.getElementById(id);
    const text = element.innerText;
    if (isNaN(parseFloat(text))) {
      setData([...data, text]);
    } else {
      setData([...data, parseFloat(text)]);
    }
  }
  //clicking on an operation
  function operationClick(id) {
    const index = data.length - 1;
    if (
      data.length !== 0 &&
      data[index] !== "+" &&
      data[index] !== "-" &&
      data[index] !== "*" &&
      data[index] !== "/"
    ) {
      const text = document.getElementById(id).innerText;
      setData([...data, text]);
    }
  }
  //back button
  function backButtonClick() {
    const index = data.length - 1;
    data.splice(index, 1);
    setData([...data]);
  }
  //displaying the content
  function display() {
    const element = document.getElementById("input");
    document.getElementById("input").innerText = "";
    data.forEach((e) => {
      element.innerText += e;
    });
  }
  //calculate Result
  function calculateResult() {
    let operations = {};
    let numbers = [];
    data.forEach((element, index) => {
      const characters = [...data];
      if (
        element === "+" ||
        element === "-" ||
        element === "*" ||
        element === "/"
      ) {
        const key = index;
        operations[key] = characters.splice(index, 1);
      }
    });
    const indexes = Object.keys(operations);
    for (let i = 0; i < data.length; i++) {
      const characters = [...data];
      if (indexes[i] !== undefined) {
        if (i === 0) {
          numbers.push(characters.slice(0, indexes[i]));
        }
        if (indexes[i + 1] === undefined) {
          numbers.push(characters.slice(indexes[i]));
          break;
        } else {
          numbers.push(characters.slice(indexes[i], indexes[i + 1]));
        }
      }
    }
    for (let i = 0; i < numbers.length; i++) {
      let element = numbers[i];
      for (let j = 0; j < element.length; j++) {
        if (
          element[j] === "+" ||
          element[j] === "-" ||
          element[j] === "*" ||
          element[j] === "/"
        ) {
          element.splice(j, 1);
        }
      }
      numbers[i] = element;
    }
    numbers.forEach((e, index) => {
      const arrayOfDigits = e;
      const singleNumber = Number(arrayOfDigits.join(""));
      numbers[index] = singleNumber;
    });
    operations = Object.values(operations);
    operations.forEach((e, index) => {
      const arrayOfDigits = e;
      const singleNumber = String(arrayOfDigits.join(""));
      operations[index] = singleNumber;
    });
    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
      if (operations[i] !== undefined) {
        arr.push(String(numbers[i]));
        arr.push(operations[i]);
      } else {
        arr.push(String(numbers[i]));
      }
    }
    const result = eval(arr.join(""));
    const mainArr = result.toString().split("");
    setData(mainArr);
  }
  return (
    <>
      <Navbar></Navbar>
      <Board
        numberClick={numberClick}
        operationClick={operationClick}
        backButtonClick={backButtonClick}
        calculate={calculateResult}
      ></Board>
    </>
  );
}

export default App;
