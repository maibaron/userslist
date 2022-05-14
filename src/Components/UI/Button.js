const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.buttonType}>
      {props.buttonValue}
    </button>
  );
};
export default Button;
