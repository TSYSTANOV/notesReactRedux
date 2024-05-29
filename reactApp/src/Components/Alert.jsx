import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../redux/NotesSlice";

function AlertNotification() {
  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state.notes);
  if (alert) {
    return (
      <Alert
        variant="danger"
        className="alert alert-dismissible"
        onClick={() => {
          dispatch(removeAlert());
        }}
      >
        Input is empry
      </Alert>
    );
  }
}
export { AlertNotification };
