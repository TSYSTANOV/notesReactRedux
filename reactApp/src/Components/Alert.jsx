import Alert from "react-bootstrap/Alert";
import './Alert.css'
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../redux/NotesSlice";
import {CSSTransition} from 'react-transition-group'
import { useRef } from "react";

function AlertNotification() {
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const {alert} = useSelector((state)=>state.notes)
    return (
      <CSSTransition nodeRef={nodeRef} in={alert} timeout={{enter:500,exit:350}} classNames={'alert'} unmountOnExit mountOnEnter>
      <Alert ref={nodeRef}
        variant="danger"
        className="alert alert-dismissible"
        onClick={() => {
          dispatch(removeAlert());
        }}
      >
        Input is empry
      </Alert>
      </CSSTransition>
    );

}
export { AlertNotification };
