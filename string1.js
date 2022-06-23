"use strict";

// get command line arguments
const chgString = function (arr) {
  const right = arr.map((item) => {
    const len = item.length;
    return item.slice(3, len);
  });

  const left = arr.map((item) => item.slice(0, 3));
  const combine = [];
  for (let i = 0; i < arr.length; i++) {
    combine.push(right[i] + "isa" + left[i]);
  }
  return combine.join(" ");
};

export { chgString };
