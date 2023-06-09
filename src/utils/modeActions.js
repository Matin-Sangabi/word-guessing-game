export const EASY_MODE = "EASY_MODE";
export const MEDIUM_MODE = "MEDUIM_MODE";
export const HARD_MODE = "HARD_MODE";
import { data } from "./data";

export const easyModeData = (index) => {
  const { min, max } = calculateBetweenValue(index, 50);
  const random = Math.round(Math.random() * (max - min) + min);
  return data[random];
};

export const mediumModeData = (index) => {
  const { min, max } = calculateBetweenValue(index, 7);
  const random = Math.round(Math.random() * (max - min) + min);
  return data[random];
};

export const HardModeData = (index) => {
  const { min, max } = calculateBetweenValue(index, 3);
  const random = Math.round(Math.random() * (max - min) + min);
  return data[random];
};

const calculateBetweenValue = (num, sum) => {
  const max = num + sum;
  const min = num - sum;
  return { max, min };
};
