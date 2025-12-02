import React from "react";

export const StatisticsSection = () => {
  const statisticsData = [
    {
      icon: "/ICONS-04-5ebf41a0-116w-png.png",
      title: "SPORTS\nSUPPLEMENTS",
      iconWidth: 97,
      iconHeight: 97,
      leftOffset: "calc(50.00%_-_288px)",
      titleLeftOffset: "calc(50.00%_-_303px)",
      titleWidth: 126,
      textColor: "#414345",
    },
    {
      icon: "/ICONS-06-562949a8-123w-png.png",
      title: "FLASH AT HOME",
      iconWidth: 103,
      iconHeight: 103,
      leftOffset: "calc(50.00%_+_188px)",
      titleLeftOffset: "calc(50.00%_+_171px)",
      titleWidth: 138,
      textColor: "#284053",
    },
  ];

  return (
    <section
      className="absolute w-full top-[1792px] left-0 h-[143px] flex bg-white"
      aria-label="Statistics Section"
    >
      <div className="h-[143px] ml-[480px] mr-[480px] flex-1 relative">
        {statisticsData.map((stat, index) => (
          <div key={index}>
            <div
              className="absolute top-0 flex justify-center"
              style={{
                left: stat.leftOffset,
                width: `${stat.iconWidth}px`,
                height: `${stat.iconHeight}px`,
              }}
            >
              <div
                className="flex justify-center"
                style={{
                  width: `${stat.iconWidth}px`,
                  height: "17px",
                }}
              >
                <div
                  className="aspect-[1] bg-cover bg-[50%_50%]"
                  style={{
                    width: `${stat.iconWidth}px`,
                    height: `${stat.iconHeight}px`,
                    backgroundImage: `url(${stat.icon})`,
                  }}
                  role="img"
                  aria-label={stat.title.replace("\n", " ")}
                />
              </div>
            </div>

            <div
              className="absolute flex justify-center"
              style={{
                top: stat.title.includes("\n") ? "99px" : "105px",
                left: stat.titleLeftOffset,
                width: `${stat.titleWidth}px`,
                height: stat.title.includes("\n") ? "42px" : "21px",
              }}
            >
              <div
                className="flex items-center justify-center [font-family:'Roboto-Bold',Helvetica] font-bold text-lg text-center tracking-[0] leading-[normal]"
                style={{
                  width: stat.title.includes("\n")
                    ? "126.65px"
                    : `${stat.titleWidth}px`,
                  height: stat.title.includes("\n") ? "42px" : "21px",
                  marginLeft: stat.title.includes("\n") ? "0.2px" : "0",
                  color: stat.textColor,
                  whiteSpace: stat.title.includes("\n") ? "normal" : "nowrap",
                }}
              >
                {stat.title.split("\n").map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < stat.title.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
