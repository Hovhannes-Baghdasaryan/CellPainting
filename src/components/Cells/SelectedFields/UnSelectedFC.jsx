import React from "react";
import { UnSelected } from "./../../styledComponents/CellStyle";

const UnSelectedFC = ({ color, item, value, setValue }) => {
  return (
    <>
      <UnSelected
        onClick={() => {
          item.col = color;
          setValue([...value, item.number]);
        }}
      ></UnSelected>
    </>
  );
};

export default UnSelectedFC;
