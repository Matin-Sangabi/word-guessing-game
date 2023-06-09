export const EASY_MODE = "EASY_MODE";
export const MEDIUM_MODE = "MEDUIM_MODE";
export const HARD_MODE = "HARD_MODE";
import { data } from "./data";

export const ModeData = (index, sum) => {
  const { min, max } = calculateBetweenValue(index, sum);
  const random = Math.round(Math.random() * (max - min) + min);
  return data[random];
};

const calculateBetweenValue = (num, sum) => {
  const max = num + sum;
  const min = num - sum;
  return { max, min };
};
