import User from "./User";
import Card from "./Card";
//his props is the array in app.js
const UsersList = (props) => {
  console.log(props.usersData);
  return (
    <Card classes="">
      <div class="users-list">
        {props.usersData.map((dataPoint) => {
          return (
            <User
              key={dataPoint.key}
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
