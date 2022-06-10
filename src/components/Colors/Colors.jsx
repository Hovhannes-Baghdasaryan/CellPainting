import React from "react";
import styled from "styled-components";

const Painting = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Colors({ setColor, color, setValue }) {
  return (
    <Painting>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      {color}{" "}
      <button
        onClick={() => {
          setValue([]);
        }}
      >
        Clean All
      </button>
    </Painting>
  );
}

export default Colors;
