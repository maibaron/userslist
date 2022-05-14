import User from "./User";
import Card from "../UI/Card";
import "./UserList.css";
//his props is the array in app.js
const UsersList = (props) => {
  console.log(props.usersData);
  return (
    <Card classes="">
      <ul className="users-list">
        {props.usersData.map((dataPoint) => {
          return (
            <User
              key={dataPoint.id}
              aUsername={dataPoint.username}
              anAge={dataPoint.age}
            />
          );
        })}
      </ul>
    </Card>
  );
};
export default UsersList;
