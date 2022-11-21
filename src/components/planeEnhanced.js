import React from "react";

var bas_flight = {
  x407176: [
    "407176",
    43.2041,
    -8.0519,
    26,
    36000,
    395,
    "4456",
    0,
    "",
    "",
    1668878308,
    "",
    "",
    "",
    0,
    0,
    "EXS45LE",
  ],
};

var enh_flight = {
  icao: 407176,
  f_number: "BY2203",
  f_number_2: "TOM6LE",
  airline: "TUI Airways",
  squawk: 4527,
  route: {
    from: { from: "ABZ", name: "Aberdeen", time: "..." },
    to: { from: "TFS", name: "Tenerife", time: "..." },
  },
  position: { lat: 43.2041, lon: -8.0519 },
  aircraft: {
    type: "Boeing 767-38A (ER)",
    registration: "G-TAWN",
    serial: 88333,
    country: "England",
    flag: "imagepath",
  },
  recent: {
    "19/10/2022": ["BY1619", "TFS", "Tenerife", "EDI", "Edingburg"],
    "17/10/2022": ["BY1618", "EDI", "Edingburg", "TFS", "Tenerife"],
  },
  data: {
    c_altitude: 37000,
    gps_altitude: 38788,
    v_speed: 0,
    track: 184,
    groundspeed: 922,
    mach: 1,
  },
};

export const PlaneEnhanced = () => {
  return (
    <div className="col-12 col-md-4 px-2 px-md-0 plane-info">
      <div className="plane-info-box sticky-md-top">
        <div className="plane-info-box-bgwrapper">
          <div className="plane-info-box-device">
            <div className="plane-info-box-device-desktop">
              <button class="btn" href="">
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1669024111/apiplaneweb/logo/icon-close_q3oi0u.svg"
                  alt="close aircraft info"
                />
              </button>
            </div>
          </div>
          <div className="plane-info-header">
            <div className="plane-info-header-ids">
              <h5>BY2203 / TOM1DW</h5>
              <p>TUI</p>
              <p>Operated by TOU Airways</p>
            </div>
            <div className="plane-info-header-logo">
              <img
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1668892798/apiplaneweb/logo/Frame_jq2e5z.svg"
                alt="radarowl logo"
              />
            </div>
          </div>
          <div className="plane-info-image">
            <img
              src="https://cdn.jetphotos.com/400/5/98629_1653709314.jpg"
              alt="image of ..."
            />
          </div>
          <div className="plane-info-route">
            <div className="col-5 plane-info-route-item">
              <h3 className="route-id">TFS</h3>
              <p className="airport-name">Tenerife</p>
              <p className="timezone">West (UTC+01:00)</p>
            </div>
            <div className="col-2 plane-info-route-icon">
              <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1668894413/apiplaneweb/logo/route_to_vqwant.svg" />
            </div>
            <div className="col-5 plane-info-route-item">
              <h3 className="route-id">TFS</h3>
              <p className="airport-name">Tenerife</p>
              <p className="timezone">West (UTC+01:00)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="plane-info-box">
        <div className="plane-info-box-title">
          <img
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1668897870/apiplaneweb/logo/aircraft-icon_ve82to.svg"
            alt="aircraft info"
          />
          <h5>More BY2203 information</h5>
        </div>

        <div className="plane-info-info">
          <div className="plane-info-aircraft col-6">
            <div className="plane-info-aircraft-item">
              <p className="item">AIRCRAFT TYPE (B763)</p>
              <p className="description">Boeing 767-38A (ER)</p>
            </div>
            <div className="plane-info-aircraft-item">
              <p className="item">REGISTRATION</p>
              <p className="description">G-OBYK</p>
            </div>
            <div className="plane-info-aircraft-item">
              <p className="item">SERIAL NUMBER (MSN)</p>
              <p className="description">43958407</p>
            </div>
          </div>

          <div className="plane-info-aircraft col-6">
            <div className="airline-box">
              <img
                className="airline-logo"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1668899829/apiplaneweb/temp/tui_r3ncxq.svg"
                alt="airline ..."
              />
            </div>
            <div className="plane-info-aircraft-flex">
              <p className="item">COUNTRY OF REG.</p>
              <img
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1668899588/apiplaneweb/temp/United_Kingdom_GB_mghuai.svg"
                alt="airplane registered in ..."
              />
            </div>
            <div className="plane-info-aircraft-item">
              <p className="item">AGE</p>
              <p className="description">XX Years</p>
            </div>
          </div>
        </div>
      </div>

      <div className="plane-info-box">
        <div className="plane-info-box-title">
          <img
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1668900532/apiplaneweb/logo/calendar_month_a3dymj.svg"
            alt="recent flights"
          />
          <h5>Recent G-OBYK flights</h5>
        </div>
        <div className="plane-info-recent">
          <div className="plane-info-recent-header">
            <p className="col-4 description">DATE</p>
            <p className="col description">FLIGHT/ROUTE</p>
          </div>
          <div className="plane-info-recent-flight">
            <div className="plane-info-recent-flight-date col-4">
              <p className="date">18/10/2022</p>
            </div>
            <div className="plane-info-recent-flight-route col">
              <p className="flight-id">
                <strong>BY2202</strong> (TOM56Y)
              </p>
              <p className="airport">
                <span>
                  <img
                    src="https://res.cloudinary.com/jorgepardor/image/upload/v1668901140/apiplaneweb/logo/flght_from_fyf5go.svg"
                    alt="route from ..."
                  />
                </span>
                Manchester (MAN)
              </p>
              <p className="airport">
                <span>
                  <img
                    src="https://res.cloudinary.com/jorgepardor/image/upload/v1668901141/apiplaneweb/logo/flight_to_lnqcjz.svg"
                    alt="route to ..."
                  />
                </span>
                Tenerife (TFS)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="plane-info-box">
        <div className="plane-info-box-title">
          <img
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1668901795/apiplaneweb/logo/altitude_kw5iod.svg"
            alt="recent flights"
          />
          <h5>Altitude</h5>
        </div>

        <div className="plane-info-info">
          <div className="plane-info-aircraft col-6">
            <div className="plane-info-aircraft-item">
              <p className="item">CALIBRATED ALTITUDE</p>
              <p className="description">36,000 ft</p>
            </div>
            <div className="plane-info-aircraft-item">
              <p className="item">GPS ALTITUDE</p>
              <p className="description">36.000 ft</p>
            </div>
          </div>

          <div className="plane-info-aircraft col-6">
            <div className="plane-info-aircraft-item">
              <p className="item">Vertical speed</p>
              <p className="description">00000</p>
            </div>
            <div className="plane-info-aircraft-item">
              <p className="item">Track</p>
              <p className="description">184</p>
            </div>
          </div>
        </div>
      </div>

      <div className="plane-info-box">
        <div className="plane-info-box-title">
          <img
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1668901795/apiplaneweb/logo/altitude_kw5iod.svg"
            alt="recent flights"
          />
          <h5>Speed</h5>
        </div>

        <div className="plane-info-info">
          <div className="plane-info-aircraft col-6">
            <div className="plane-info-aircraft-item">
              <p className="item">GROUND SPEED</p>
              <p className="description">464 kts</p>
            </div>
            <div className="plane-info-aircraft-item">
              <p className="item">INDICATED AIRSPEED</p>
              <p className="description">N/A</p>
            </div>
          </div>

          <div className="plane-info-aircraft col-6">
            <div className="plane-info-aircraft-item">
              <p className="item">TRUE AIRSPEED</p>
              <p className="description">99999</p>
            </div>
            <div className="plane-info-aircraft-item">
              <p className="item">MACH</p>
              <p className="description">0.8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
