import Card from "./Card";
import "./NewUserForm.css";
import { useState } from "react";
//my only prop is the onAddNewUser pointer
const NewUserForm = (props) => {
  //state for the username input
  const [newUsername, setNewUsername] = useState("");
  //state for the age input
  const [newAge, setNewAge] = useState("");

  //with every key press in the username input this event happens
  const enterNameHandler = (event) => {
    // console.log(event.target.value);
    setNewUsername(event.target.value);
  };
  //same but in the age input
  const enterAgeHandler = (event) => {
    // console.log(event.target.value);
    setNewAge(event.target.value);
  };
  //when the form is submitted
  const submitNewUserHandler = (event) => {
    event.preventDefault();
    if (newAge !== "" && newUsername !== "") {
      if (newAge > 0) {
        const newUserData = {
          id: Math.random(),
          username: newUsername,
          age: newAge,
        };
        console.log(newUserData);
        setNewAge("");
        setNewUsername("");
        props.onAddNewUser(newUserData);
      } else {
        props.onAddNewUser("Please enter a valid age(>0).");
      }
    } else {
      props.onAddNewUser(
        "Please enter a valid name and age(non-empty values)."
      );
    }
  };

  return (
    <Card classes="">
      <form onSubmit={submitNewUserHandler}>
        <label>
          Username
          <input type="text" onChange={enterNameHandler} value={newUsername} />
        </label>
        <label>
          Age
          <input type="number" onChange={enterAgeHandler} value={newAge} />
        </label>
        <button type="submit">Add New User</button>
      </form>
    </Card>
  );
};
export default NewUserForm;
