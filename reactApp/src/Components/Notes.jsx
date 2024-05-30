import ListGroup from "react-bootstrap/ListGroup";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../redux/NotesSlice";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
function Notes() {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  return (
    <ListGroup as="ol" numbered className="pt-4">
      {notes.map((note) => {
        return (
          <ListGroup.Item
            key={note.id}
            as="li"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              {note.title}
              <strong>
                <span> {note.date}</span>
              </strong>
            </div>
            <MdDeleteForever
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => {
                dispatch(deleteNote(note.id));
              }}
            />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export { Notes };
