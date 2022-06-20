const SetMatrix = (length, defaultColor) => {
  let arr = [];
  let count = 1;
  for (let i = 0; i < length; i++) {
    arr[i] = [];
    for (let j = 0; j < length; j++) {
      arr[i][j] = {
        number: count++,
        col: defaultColor,
      };
    }
  }

  return arr;
};

export const arr = SetMatrix(25, "black");
