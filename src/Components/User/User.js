import "./User.css";
const User = (props) => {
  return (
    <div className="userItem">
      <p>{`${props.aUsername}  (${props.anAge} years old)`}</p>
    </div>
  );
};
export default User;
