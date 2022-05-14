import "./Card.css";
const Card = (props) => {
  const styles = props.classes;
  return (
    <div className={`card ${styles !== "" ? styles : ""}`}>
      {props.children}
    </div>
  );
};
export default Card;
