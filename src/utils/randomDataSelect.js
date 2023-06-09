import { data } from "./data";

export function selectRandomData() {
  const randomSelect = Math.floor(Math.random() * data.length);
  return data[randomSelect];
}
