import React from "react";
import Row from "./Row";
import { CellsStyle, RowStyle } from "./../styledComponents/RowStyle";

function Cells({ value, setValue, color, arr }) {
  return (
    <CellsStyle>
      {arr.map((item, index) => {
        return (
          <RowStyle key={index}>
            <Row
              setValue={setValue}
              value={value}
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
