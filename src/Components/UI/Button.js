const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.buttonType || "button"}>
      {props.buttonValue}
    </button>
  );
};
export default Button;
