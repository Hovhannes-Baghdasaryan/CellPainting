import React from "react";
import SelectedFC from "./SelectedFields/SelectedFC";
import UnSelectedFC from "./SelectedFields/UnSelectedFC";

function Row({ setValue, value, color, arr }) {
  return (
    <>
      {arr.map((item, index) => {
        if (value.includes(item.number)) {
          return <SelectedFC key={index + 100} color={color} item={item} />;
        } else
          return (
            <UnSelectedFC
              key={index + 200}
              color={color}
              item={item}
              setValue={setValue}
              value={value}
            />
          );
      })}
    </>
  );
}

export default Row;
