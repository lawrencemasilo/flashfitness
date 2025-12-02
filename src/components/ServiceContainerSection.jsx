import React from "react";

export const ServiceContainerSection = () => {
  const services = [
    {
      id: 1,
      title: "FACILITY DESIGN",
      icon: "/ICONS-10-120w-png.png",
      leftPosition: "70px",
      titleLeftCalc: "calc(50.00%_-_431px)",
      titleWidth: "142px",
    },
    {
      id: 2,
      title: "GYM EQUIPMENT",
      icon: "/ICONS-08-120w-png.png",
      leftPosition: "310px",
      titleLeftCalc: "calc(50.00%_-_192px)",
      titleWidth: "145px",
    },
    {
      id: 3,
      title: "FACILITY MANAGEMENT",
      icon: "/ICONS-07-33fb5ae8-119w-png.png",
      leftPosition: "550px",
      titleLeftCalc: "calc(50.00%_+_18px)",
      titleWidth: "204px",
    },
    {
      id: 4,
      title: "EXECUTIVE SERVICES",
      icon: "/ICONS-09-112w-png.png",
      leftPosition: "793px",
      titleLeftCalc: "calc(50.00%_+_270px)",
      titleWidth: "181px",
    },
  ];

  return (
    <section className="absolute w-full top-[1489px] left-0 h-[141px] flex bg-white">
      <div className="h-[141px] ml-[480px] mr-[480px] flex-1 relative">
        {services.map((service, index) => (
          <React.Fragment key={service.id}>
            <div
              className="absolute top-[110px] h-[21px] flex items-center justify-center [font-family:'Roboto-Bold',Helvetica] font-bold text-[#284053] text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap"
              style={{
                left: service.titleLeftCalc,
                width: service.titleWidth,
              }}
            >
              {service.title}
            </div>

            <div
              className={`absolute top-0 ${index === 3 ? "h-[94px] w-[calc(100%_-_866px)]" : "h-[100px] w-[calc(100%_-_860px)]"} flex justify-center`}
              style={{ left: service.leftPosition }}
            >
              <div
                className={`${index === 3 ? "w-[94px]" : index === 2 ? "w-[99.94px]" : "w-[100px]"} h-[17px] flex justify-center`}
              >
                <div
                  className={`${index === 3 ? "w-[94px] h-[94px]" : index === 2 ? "w-[99.94px] h-[99.94px]" : "w-[100px] h-[100px]"} aspect-[1] bg-cover bg-[50%_50%]`}
                  style={{ backgroundImage: `url(${service.icon})` }}
                  role="img"
                  aria-label={service.title}
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
