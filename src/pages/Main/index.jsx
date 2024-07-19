import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  ZoomableGroup,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";

const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json";

const Main = () => {

const [geo, setGeo] = useState();
console.log(geo)
  return (
    <div
      className="h-[calc(100vh-74px)] text-white overflow-hidden 
  flex flex-col justify-center items-center md:pt-20 wrapper"
    >

      <h1 className="px-6 pb-6">Detay Görüntüle{""} {geo?.properties?.name ? geo.properties.name : "(ülke seçin)"} </h1>
      <ComposableMap height={1000} projectionConfig={{scale: 287}}>
        <ZoomableGroup>
          <Graticule stroke="gray" strokeWidth={0.3} />
          <Sphere stroke="gray" strokeWidth={0.3} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Link to={`/detail?code=${geo.id}`}>
                <Geography
                onMouseEnter={()=> setGeo(geo)}
                onMouseLeave={()=> setGeo(null)}
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#eee",
                    },
                    hover: {
                      fill: "rgb(54 197 94)",
                    },
                  }}
                />
                </Link>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default Main;



