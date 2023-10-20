import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./ConfirmedBookingModal.css"


const ConfirmedBookingModal = ({isOpen, onClose}) => {

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Reservation confirmed</h3>
            <button className="close-button" onClick={() => onClose()}>X</button>
          </div>
          <div className="modal-body">
            <p>You will receive an email with all the details.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBookingModal;
