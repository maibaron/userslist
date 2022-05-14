import "./User.css";
const User = (props) => {
  return (
    <li className="userItem">
      <p>{`${props.aUsername}  (${props.anAge} years old)`}</p>
    </li>
  );
};
export default User;
