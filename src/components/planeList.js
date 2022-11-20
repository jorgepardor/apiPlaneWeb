import React from "react";

export const PlaneList = () => {
  return (
    <div className="plane-list">
      <div className="plane-list-item">
        <div className="col-3 icon">
          <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1668942222/apiplaneweb/logo/plane_marker_p32o6b.svg" alt="" />
        </div>
        <div className="col info">
          <h5 className="info-title">BY2203 / TOM1DW</h5>
          <p className="info-element">TUI</p>
          <p className="info-element">Operated by TOU Airways</p>
        </div>
      </div>
    </div>
  );
};
