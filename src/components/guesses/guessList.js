// import { commonString } from "@/utils/commonString";

const GeuessList = ({ choose, value }) => {
  console.log(value);
  return (
    <ul>
      {choose.map((item, index) => (
        <li key={index}>
          <span>User : {commonString(item.user, value)}</span>
          <span>Robot : {item.robot}</span>
        </li>
      ))}
    </ul>
  );
};

export default GeuessList;
