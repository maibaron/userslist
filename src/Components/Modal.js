import Card from "./Card";
import "./Modal.css";
const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  const hideModalHandler = (event) => {
    event.preventDefault();
    props.onHideModal(false);
  };
  return (
    <div className="overlay" onClick={hideModalHandler}>
      <Card classes="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Invalid Input</h4>
          </div>
          <div className="modal-body">
            <p>{props.bodyContent}</p>
          </div>
          <div className="modal-footer">
            <button className="button" onClick={hideModalHandler}>
              Okay
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Modal;
