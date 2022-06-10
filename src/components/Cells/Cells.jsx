import React from "react";
import styled from "styled-components";
import Row from "./Row";

const RowStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const CellsStyle = styled.div`
  border: 1px solid red;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 95%;
`;

function Cells({ cellsCount, value, setValue, color }) {
  let length = cellsCount;
  let arr = [];
  let count = 1;
  for (let i = 0; i < length; i++) {
    arr[i] = [];
    for (let j = 0; j < length; j++) {
      arr[i][j] = count++;
    }
  }

  return (
    <CellsStyle>
      {arr.map((item, index) => {
        return (
          <RowStyle key={index}>
            <Row
              value={value}
              setValue={setValue}
              arr={arr[index]}
              color={color}
            />
          </RowStyle>
        );
      })}
    </CellsStyle>
  );
}

export default Cells;
