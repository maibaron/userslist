import "./App.css";
import { useState } from "react";
import NewUserForm from "./Components/NewUserForm.js";
import UsersList from "./Components/UsersList";
import Modal from "./Components/Modal";
// import Modal from "./Components/Modal";
function App() {
  const [myUsers, setMyUsers] = useState([]);
  const [modalStat, setModalStat] = useState(false);
  const [modalBody, setModalBody] = useState(
    "Please enter a valid name and age(non-empty values)."
  );
  //each user would be an object with id,username,age values
  //this function happens only when the form component is submitted
  const addNewUserHandler = (user) => {
    console.log(user);
    if (typeof user !== "object") {
      setModalBody(user);
      setModalStat(true);
    } else {
      setMyUsers((prevUsers) => {
        return [...prevUsers, user];
      });
      setModalStat(false);
    }
  };
  const hideModalHandler = (status) => {
    setModalStat(status);
  };
  return (
    <div>
      <NewUserForm onAddNewUser={addNewUserHandler} />
      {/* users list need to hold state of array */}
      {myUsers.length > 0 && <UsersList usersData={myUsers} />}
      <Modal
        show={modalStat}
        onHideModal={hideModalHandler}
        bodyContent={modalBody}
      />
    </div>
  );
}

export default App;