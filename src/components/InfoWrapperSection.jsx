import React from "react";

export const InfoWrapperSection = () => {
  const services = [
    {
      icon: "/ICONS-03-3c53c534-120w-png.png",
      title: "HEALTHARE SERVICES",
      leftPosition: "110px",
      titleLeftCalc: "calc(50.00%_-_414px)",
      titleWidth: "188px",
    },
    {
      icon: "/ICONS-02-8f5bf182-120w-png.png",
      title: "PHARMACEUTICAL SERVICES",
      leftPosition: "470px",
      titleLeftCalc: "calc(50.00%_-_83px)",
      titleWidth: "247px",
    },
    {
      icon: "/ICONS-01-071d34ec-119w-png.png",
      title: "HEALTH & FITNESS\nTECHNOLOGIES",
      leftPosition: "790px",
      titleLeftCalc: "calc(50.00%_+_272px)",
      titleWidth: "159px",
      iconWidth: "99.94px",
      isMultiline: true,
    },
  ];

  return (
    <section
      className="absolute w-full top-[1630px] left-0 h-[162px] flex bg-white"
      aria-label="Services Overview"
    >
      <div className="h-[162px] ml-[480px] mr-[480px] flex-1 relative">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div
              className="absolute w-[calc(100%_-_860px)] top-0 h-[100px] flex justify-center"
              style={{ left: service.leftPosition }}
            >
              <div
                className={`w-[${service.iconWidth || "100px"}] h-[17px] flex justify-center`}
              >
                <div
                  className={`w-[${service.iconWidth || "100px"}] h-[${service.iconWidth || "100px"}] aspect-[1] bg-cover bg-[50%_50%]`}
                  style={{ backgroundImage: `url(${service.icon})` }}
                  role="img"
                  aria-label={service.title.replace("\n", " ")}
                />
              </div>
            </div>

            <div
              className={`absolute top-[110px] ${service.isMultiline ? "h-[42px]" : "h-[21px]"} flex items-center justify-center [font-family:'Roboto-Bold',Helvetica] font-bold text-[#284053] text-lg text-center tracking-[0] leading-[normal] ${service.isMultiline ? "" : "whitespace-nowrap"}`}
              style={{
                left: service.titleLeftCalc,
                width: service.titleWidth,
              }}
            >
              {service.isMultiline ? (
                <>
                  HEALTH &amp; FITNESS
                  <br />
                  TECHNOLOGIES
                </>
              ) : (
                service.title
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
