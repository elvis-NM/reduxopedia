import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetDestination } from "../../redux/slice/destinationSlice";
import { resetCounter } from "../../redux/slice/counterSlice";

function ResetApp() {
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <button
        className="btn btn-warning"
        onClick={() => dispatch(resetDestination())}
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
