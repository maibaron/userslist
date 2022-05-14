import Button from "./Button";
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
      <Card className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4>{props.modalTitle}</h4>
          </div>
          <div className="modal-body">
            <p>{props.bodyContent}</p>
          </div>
          <div className="modal-footer">
            <Button
              buttonType="button"
              buttonValue="Okay"
              onClick={hideModalHandler}
            />
            {/* <button className="button" onClick={hideModalHandler}> */}
            {/* Okay */}
            {/* </button> */}
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Modal;
