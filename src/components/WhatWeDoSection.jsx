import React from "react";
//import backgroundShadow from "./background-shadow.svg";
//import button from "./button.png";
//import image2 from "./image-2.png";
//import linkMapboxLogo from "./link-mapbox-logo.svg";
//import vector from "./vector.svg";

export const WhatWeDoSection = () => {
  const mapAttributions = [
    {
      text: "© Mapbox",
      width: "55px",
      fontFamily: "[font-family:'Inter-Regular',Helvetica]",
      fontWeight: "font-normal",
      fontSize: "text-[10.9px]",
      leftPosition: "calc(50.00%_-_130px)",
      actualWidth: "55.08px",
    },
    {
      text: "© OpenStreetMap",
      width: "97px",
      fontFamily: "[font-family:'Inter-Regular',Helvetica]",
      fontWeight: "font-normal",
      fontSize: "text-[11.1px]",
      leftPosition: "calc(50.00%_-_72px)",
      actualWidth: "97.09px",
    },
    {
      text: "Improve this map",
      width: "99px",
      fontFamily: "[font-family:'Inter-Bold',Helvetica]",
      fontWeight: "font-bold",
      fontSize: "text-[11.8px]",
      leftPosition: "calc(50.00%_+_31px)",
      actualWidth: "99.56px",
    },
  ];

  return (
    <section
      className="absolute w-full h-[calc(100%_-_5570px)] top-[5570px] left-0 bg-[url(/image.png)] bg-cover bg-[50%_50%]"
      aria-label="Map section"
    >
      <img
        className="absolute top-2.5 left-2.5 w-[30px] h-[90px]"
        alt=""
        src="https://unsplash.com/photos/a-person-holding-a-bottle-SY74cxzrZag"
        role="presentation"
      />

      <button
        className="top-2.5 absolute w-[calc(100%_-_1890px)] left-[1880px] h-[30px] flex bg-white rounded overflow-hidden shadow-[0px_0px_0px_2px_#0000001a]"
        aria-label="Zoom in"
      >
        <div className="w-[30px] flex">
          <div className="w-[30px] flex">
            <div className="w-[30px] h-[30px] relative">
              {/*<img
                className="absolute w-[60.00%] h-[60.00%] top-[20.00%] left-[20.00%]"
                alt=""
                src={vector}
                role="presentation"
              />*/}
            </div>
          </div>
        </div>
      </button>

      <button
        className="top-[50px] absolute w-[calc(100%_-_1890px)] left-[1880px] h-[30px] flex bg-white rounded overflow-hidden shadow-[0px_0px_0px_2px_#0000001a]"
        aria-label="Zoom out"
      >
        {/*<img
          className="w-[30px] h-[30px]"
          alt=""
          src={button}
          role="presentation"
        />*/}
      </button>

      <img
        className="absolute top-[276px] left-[7px] w-[85px] h-[21px]"
        alt="Mapbox"
        src="https://unsplash.com/photos/a-person-holding-a-bottle-SY74cxzrZag"
      />

      <nav
        className="absolute top-[284px] left-[1650px] w-[270px] h-5 bg-[#ffffff80]"
        aria-label="Map attributions"
      >
        {mapAttributions.map((attribution, index) => (
          <div
            key={index}
            className="absolute top-[3px] h-3.5 flex justify-center"
            style={{
              left: attribution.leftPosition,
              width: attribution.width,
            }}
          >
            <div
              className={`flex items-center justify-center h-3.5 ml-[0.2px] ${attribution.fontFamily} ${attribution.fontWeight} text-[#463939] ${attribution.fontSize} text-center tracking-[0] leading-5 whitespace-nowrap`}
              style={{ width: attribution.actualWidth }}
            >
              {attribution.text}
            </div>
          </div>
        ))}
      </nav>

      {/*<img
        className="absolute top-28 left-[948px] w-[25px] h-[41px]"
        alt="Location marker"
        src={image2}
      />*/}
    </section>
  );
};
