import React from "react";
import { logoSmall } from "../images/logos/owl_small.svg";
 

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
  position: {lat:43.2041, lon:-8.0519, },
  aircraft: { type: "Boeing 767-38A (ER)", registration: "G-TAWN", serial: 88333, country: "England", flag:"imagepath"},
  recent: {"19/10/2022": ["BY1619", "TFS", "Tenerife", "EDI", "Edingburg"], "17/10/2022": ["BY1618", "EDI", "Edingburg", "TFS", "Tenerife"] },
  data: { c_altitude: 37000, gps_altitude: 38788, v_speed: 0, track: 184, groundspeed: 922, mach: 1}

};

export const PlaneEnhanced = () => {
  return (
    <div className="col-3 plane-info">
      <div className="plane-info-box plane-info-header">
        <div className="plane-info-header-ids">
          <h5>BY2203 / TOM1DW</h5>
          <p>TUI</p>
          <p>Operated by TOU Airways</p>
        </div>
        <div className="plane-info__box plane-info__header--logo">
          <img src={logoSmall} alt="radarowl logo" />
        </div>
      </div>
      <div className="plane-info-box plane-info__image">
        <img src="..." alt="image of ..." />
      </div>
      <div className="plane-info-box plane-info__route">
        <div className="plane-info__route--box">
          <h2>TFS</h2>
          <p>Tenerife</p>
          <p>West (UTC+01:00)</p>
        </div>
        <div className="plane-info__route--icon">
          <img src="..." />
        </div>
        <div className="plane-info__route--box">
          <h2>TFS</h2>
          <p>Tenerife</p>
          <p>West (UTC+01:00)</p>
        </div>
      </div>
      <div className="plane-info-box plane-info__info">
        <div className="plane-info__info--title">
          <h5>More BY2203 information</h5>
        </div>
        <div className="plane-info__info--box">
          <div className="plane-info__info--aircraft">
            <div className="plane-info__info--aircraft--type">
              <p>AIRCRAFT TYPE (B763)</p>
              <p>Boeing 767-38A (ER)</p>
            </div>
            <div className="plane-info__info--aircraft--registration">
              <p>REGISTRATION</p>
              <p>G-OBYK</p>
              <p>SERIAL NUMBER (MSN)</p>
            </div>
          </div>
          <div className="plane-info__info--airline">
            <div className="plane-info__info--aircraft--info">
              <img src="..." alt="airline ..." />
              <div>
                <p>COUNTRY OF REG.</p>
                <img src="..." alt="airplane registered in ..." />
              </div>
              <div>
                <p>AGE</p>
                <p>XX YEARS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plane-info-box plane_info__recent">
        <div className="plane-info__recent--title">
          <h5>Recent G-OBYK flights</h5>
        </div>
        <div className="plane-info__recent--box">
          <div className="plane-info__recent--box--header">
            <p>DATE</p>
            <p>FLIGHT/ROUTE</p>
          </div>
          <div className="plane-info__recent--box--flight">
            <div className="plane-info__recent--box--flight--date">
              <p>18/10/2022</p>
            </div>
            <div className="plane-info__recent--box--flight--route">
              <p>BY2202(TOM56Y)</p>
              <p>
                <span>
                  <img src="..." alt="route from ..." />
                </span>
                Manchester (MAN)
              </p>
              <p>
                <span>
                  <img src="..." alt="route to ..." />
                </span>
                Tenerife (TFS)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="plane-info-box plane_info__extra">
        <div className="plane-info__extra--title">
          <h5>More BY2203 information</h5>
        </div>
        <div className="plane-info__extra--box">
          <div className="plane-info__extra--data">
            <div className="plane-info__extra--altitude--calibrated">
              <p>CALIBRATED ALTITUDE</p>
              <p>36,000 ft</p>
            </div>
            <div className="plane-info__extra--altitude--gps">
              <p>GPS ALTITUDE</p>
              <p>N/A</p>
            </div>
          </div>
          <div className="plane-info__extra--data">
            <div className="plane-info__extra--vspeed">
              <p>Vertical speed </p>
              <p>99999</p>
            </div>
            <div className="plane-info__extra--track">
              <p>Track</p>
              <p>24</p>
            </div>
          </div>
        </div>
      </div>
      <div className="plane-info-box plane_info__extra">
        <div className="plane-info__extra--title">
          <h5>More BY2203 information</h5>
        </div>
        <div className="plane-info__extra--box">
          <div className="plane-info__extra--data">
            <div className="plane-info__extra--altitude--calibrated">
              <p>GROUND SPEED</p>
              <p>464 kts</p>
            </div>
            <div className="plane-info__extra--altitude--gps">
              <p>INDICATED AIRSPEED</p>
              <p>N/A</p>
            </div>
          </div>
          <div className="plane-info__extra--data">
            <div className="plane-info__extra--vspeed">
              <p>TRUE AIRSPEED</p>
              <p>99999</p>
            </div>
            <div className="plane-info__extra--track">
              <p>MACH</p>
              <p>24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
