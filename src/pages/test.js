import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCurrentPlanes from "../redux/features/getPlanesSlice";

function Test() {

  const {planeState, loading} = useSelector((state) => state.planeState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentPlanes());
  }, []);

  return (
    <div className="...">

          {planeState.map((item)=>(
            <h2>{item.items[1].amount}</h2>
          ))}

    </div>
  );
}

export default Test;
