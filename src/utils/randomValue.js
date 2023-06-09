const { data } = require("./data");

export function getRandomValue(value, mode) {
  return {
    index: getIndex(value),
    value: getValue(value),
    mode: getMode(mode),
  };
}

function getIndex(value) {
  return data.findIndex((i) => i === value);
}

function getValue(value) {
  return value;
}

function getMode(mode) {
  return mode;
}
