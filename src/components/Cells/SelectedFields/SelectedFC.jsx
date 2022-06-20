import React, { useState } from "react";
import { Selected } from "./../../styledComponents/CellStyle";

const SelectedFC = ({ color, item }) => {
  const [obj, setObj] = useState(item);

  return (
    <Selected
      color={obj.col}
      onClick={() => setObj({ col: color, number: obj.number })}
    ></Selected>
  );
};

export default SelectedFC;
