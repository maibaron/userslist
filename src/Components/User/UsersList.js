import User from "./User";
import Card from "../UI/Card";
//his props is the array in app.js
const UsersList = (props) => {
  console.log(props.usersData);
  return (
    <Card classes="">
      <div className="users-list">
        {props.usersData.map((dataPoint) => {
          return (
            <User
              key={dataPoint.id}
              aUsername={dataPoint.username}
              anAge={dataPoint.age}
            />
          );
        })}
      </div>
    </Card>
  );
};
export default UsersList;
