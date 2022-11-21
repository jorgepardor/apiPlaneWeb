import React from "react";

export const MainNav = () => {
  return (
    <div className="main-nav">
      {/* <button href="..." className="btn main-nav-item">
        <img
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1669019458/apiplaneweb/logo/nav_menu_q1hmmt.svg"
          alt="desplegar menú"
        />
      </button> */}
      <button href="..." className="btn main-nav-item">
        <img
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1669019458/apiplaneweb/logo/nav_statistics_fumd50.svg"
          alt="menú estadísticas"
        />
      </button>
      <button href="..." className="btn main-nav-item">
        <img
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1669019458/apiplaneweb/logo/nav_settings_tb1ahv.svg"
          alt="menú opciones"
        />
      </button>
      <button href="..." className="btn main-nav-item">
        <img
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1669019458/apiplaneweb/logo/nav_user_dcetkn.svg"
          alt="menú usuario"
        />
      </button>
    </div>
  );
};
