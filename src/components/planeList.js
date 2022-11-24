import React from "react";
import { useEffect, useState, useContext } from "react";

export const PlaneList = () => {
  const [currentPlanes, setCurrentPlanes] = useState();
  const [indexPlanes, setIndexPlanes] = useState([]);

  useEffect(() => {
    getRadarPlanes();
  }, []);

  let getRadarPlanes = async () => {
    let response = await fetch("http://localhost/states", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentPlanes(data);
        setIndexPlanes(Object.keys(data));
      });
  };

  return (
    <div className="plane-list">
      {indexPlanes &&
        indexPlanes.map((plane, index) => {
          return (
            <div className="plane-list-item" key={index}>
              <div className="col-3 icon">
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1668942222/apiplaneweb/logo/plane_marker_p32o6b.svg"
                  alt=""
                />
              </div>
              <div className="col info">
                <h5 className="info-title">Flight: {currentPlanes[plane][16]} / ModeS: {currentPlanes[plane][0]}</h5>
                <p className="info-element">Position: {currentPlanes[plane][1]}, {currentPlanes[plane][2] }</p>
                <p className="info-element">Altitude: {currentPlanes[plane][4]}</p>
              </div>
            </div>
          );
        })};
      {/* <div className="plane-list-item">
        <div className="col-3 icon">
          <img
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1668942222/apiplaneweb/logo/plane_marker_p32o6b.svg"
            alt=""
          />
        </div>
        <div className="col info">
          <h5 className="info-title">BY2203 / TOM1DW</h5>
          <p className="info-element">TUI</p>
          <p className="info-element">Operated by TOU Airways</p>
        </div>
      </div> */}
    </div>
  );
};
