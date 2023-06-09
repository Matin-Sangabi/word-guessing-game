import { commonString } from "@/utils/commonString";

const GeuessList = ({ choose, value }) => {
  return (
    <ul>
      {choose.map((item, index) => (
        <li key={index}>
          <span>User : {commonShareLetters(item.user, value)}</span>
          <span>Robot : {commonShareLetters(item.robot, value)}</span>
        </li>
      ))}
    </ul>
  );
};

export default GeuessList;

function commonShareLetters(item, value) {
  return commonString(item, value).map((item, i) => {
    return <span key={i}>{item}</span>;
  });
}
