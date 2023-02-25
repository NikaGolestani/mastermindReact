import React from "react";

export default function Tableinfo(props) {
  let secretCode = props.SC;
  function handlePos() {
    let pos = 0;
    for (const x of Array(4).keys()) {
      if (props.Guess[x] === secretCode[x]) {
        pos += 1;
      }
    }
    return pos;
  }

  function handleNeg() {
    let neg = 0;
    let gList = props.Guess.split("");
    let sList = secretCode.split("");

    gList.sort();
    sList.sort();
    while ((sList.length !== 0) & (gList.length !== 0)) {
      if (sList[sList.length - 1] > gList[gList.length - 1]) {
        sList.pop();
      } else {
        if (sList[sList.length - 1] < gList[gList.length - 1]) {
          gList.pop();
        } else {
          gList.pop();
          sList.pop();
          neg++;
        }
      }
    }
    neg -= handlePos();
    return <td>{neg}</td>;
  }

  if (props.Guess === secretCode) {
    return (
      <tr className="True">
        <td>{props.Guess}</td>
        <td>{handlePos()}</td>
        {handleNeg()}
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{props.Guess}</td>
        <td>{handlePos()}</td>
        {handleNeg()}
      </tr>
    );
  }
}
