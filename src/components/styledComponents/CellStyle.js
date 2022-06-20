import styled from "styled-components";

export const Selected = styled.div`
  background-color: ${(props) => props.color};
  border: 1px solid;
  width: 100%;
  height: 100%;
`;

export const UnSelected = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100%;
`;
