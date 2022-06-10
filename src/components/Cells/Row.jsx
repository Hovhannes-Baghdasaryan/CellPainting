import React from "react";
import styled from "styled-components";

const Selected = styled.div`
  background-color: ${(props) => props.color};
  border: 1px solid;
  width: 100%;
  height: 100%;
`;

const UnSelected = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100%;
`;

function Row({ color, value, setValue, arr }) {
  return (
    <>
      {arr.map((item, index) => {
        if (value.includes(item))
          return (
            <Selected
              key={index + 100}
              color={color}
              onClick={() =>
                setValue([...value].filter((element) => element !== item))
              }
            ></Selected>
          );
        else
          return (
            <UnSelected
              key={index + 200}
              onClick={() => setValue([...value, item])}
            ></UnSelected>
          );
      })}
    </>
  );
}

export default Row;
