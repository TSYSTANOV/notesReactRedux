import { useDispatch } from "react-redux";
import { addNote, removeAlert, setAlert } from "../redux/NotesSlice";
import { v4 as uuid4 } from "uuid";
import { useState } from "react";
function FormInput() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  function formHandler(e) {
    e.preventDefault();
    if (inputValue) {
      dispatch(removeAlert());
      const id = uuid4();
      dispatch(
        addNote({
          title: inputValue,
          date: new Date().toLocaleDateString(),
          id,
        })
      );
      setInputValue("");
    } else {
      dispatch(setAlert());
    }
  }
  return (
    <>
      <form onSubmit={formHandler}>
        <div className="form-group">
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="form-control"
            type="text"
            value={inputValue}
            placeholder="Enter note title"
          />
        </div>
      </form>
    </>
  );
}
export { FormInput };
