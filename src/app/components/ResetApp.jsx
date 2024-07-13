import React from "react";
import { useDispatch } from "react-redux";
import { resetReduxOPedia } from "../../redux/action/actions";
// import { resetCounter } from "../../redux/slice/counterSlice";

function ResetApp() {
  const dispatch = useDispatch();

  const resetCounterAndDestination = () => {
    dispatch(resetReduxOPedia());
    // dispatch(resetCounter());
  };
  return (
    <div className="text-center">
      <button className="btn btn-warning" onClick={resetCounterAndDestination}>
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
