import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncreament = () => {
    dispatch(counterActions.increment());
  };

  const handleDecreament = () => {
    dispatch(counterActions.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle())
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubstract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncreament}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecreament}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
