import { PlaneEnhanced } from "../components/planeEnhanced";
import Map from "../components/map";
import { Header } from "../components/header";
import { PlaneList } from "../components/planeList";
import { MainNav } from "../components/mainNav";
import { useEffect, useState } from "react";

function Home() {
  let [currentPlanes, setCurrentPlanes] = useState();

  useEffect(() => {
    getRadarPlanes();
  }, []);

  let getRadarPlanes = async () => {
    let response = await fetch("http://localhost/states", {
      method: "GET",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(response)
    .then((response) => response.json())
    .then((data) => setCurrentPlanes(data))
  };

  return (
    <div className="main-map">
      <Map />
      <div className="overlays">
        <div className="header">
          <Header />
        </div>
        <div className="plane-sidebar">
          <PlaneEnhanced />
        </div>
        <div className="plane-list-sidebar">
          <PlaneList />
        </div>
        <div className="main-nav-sidebar">
          <MainNav />
        </div>
      </div>
    </div>
  );
}

export default Home;
