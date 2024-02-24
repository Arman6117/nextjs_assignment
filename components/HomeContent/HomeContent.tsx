import CardsSection from "../CardsSection/CardsSection";
import InfoBar from "../InfoBar/InfoBar";
import Route from "../Route/Route";
import Tile from "../Tile/Tile";
import "./homeContent.scss";

const tileData = [
  "Tools",
  "AWS Builder",
  "Start Build",
  "Build Supplies",
  "Tooling",
  "BlueHosting",
];
const HomeContent = () => {
  return (
    <div>
      <h1 className="title">Best Website Builders in the US</h1>
      <div className="">
        <InfoBar />
      </div>
      <div className="tileContainer">
        {tileData.map((item) => (
          <Tile key={item}>{item}</Tile>
        ))}
      </div>
      <div >
        <Route/>
      </div>
      <div>
        <CardsSection/>
      </div>
    </div>
  );
};

export default HomeContent;
