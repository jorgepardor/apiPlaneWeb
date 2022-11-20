import { PlaneEnhanced } from "../components/planeEnhanced";
import Map from "../components/map";
import logo from "./../logo.svg";
import { Header } from "../components/header";
import { PlaneList } from "../components/planeList";

function Home() {
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
      </div>
    </div>
  );
}

export default Home;
