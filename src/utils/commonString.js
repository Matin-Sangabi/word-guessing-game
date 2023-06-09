import uniqid from "uniqid";
export function commonString(str1, str2) {
  const set1 = new Set(str1.split(""));
  const set2 = new Set(str2.split(""));
  let result = [];

  for (let char of set1.values()) {
    if (set2.has(char)) {
      result.push(
        <i key={uniqid} className="highlight">
          {char}
        </i>
      );
    } else {
      result.push(char);
    }
  }

  return result;
}
