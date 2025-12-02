import React from "react";

export const FeaturesSection = () => {
  const navigationItems = [
    {
      label: "Our Services",
      width: "w-[101px]",
      textWidth: "w-[71.78px]",
      left: "left-0",
    },
    {
      label: "What We Do",
      width: "w-[99px]",
      textWidth: "w-[69.12px]",
      left: "left-[101px]",
    },
    {
      label: "Who We Are",
      width: "w-[99px]",
      textWidth: "w-[68.95px]",
      left: "left-[200px]",
      active: true,
    },
    {
      label: "How it Works",
      width: "w-[105px]",
      textWidth: "w-[75.52px]",
      left: "left-[299px]",
    },
    {
      label: "Service and Maintenance",
      width: "w-[172px]",
      textWidth: "w-[142.78px]",
      left: "left-[404px]",
    },
    {
      label: "Contact",
      width: "w-[74px]",
      textWidth: "w-[44.81px]",
      left: "left-[577px]",
    },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-[1920px] h-[81px] z-[2]"
      role="banner"
    >
      <div
        className="absolute top-3.5 left-[60px] w-[167px] h-[45px] bg-[url(/flashfit-logo-red-01-eb315b60-166w-png.png)] bg-cover bg-[50%_50%]"
        role="img"
        aria-label="FlashFit Logo"
      />

      <nav
        className="absolute h-[calc(100%_-_58px)] top-[22px] left-[427px] w-[651px]"
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className={`${item.left} ${item.width} absolute h-full top-0 flex`}
          >
            {item.active ? (
              <div className="w-[98.64px] flex flex-col gap-[2.4px]">
                <div className="ml-[15px] mr-[15px] flex-1 max-h-0.5 border-t-2 [border-top-style:solid] border-transparent" />
                <a
                  href="#who-we-are"
                  className={`flex items-center justify-center ml-[15px] ${item.textWidth} h-3.5 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs tracking-[0.36px] leading-[normal] whitespace-nowrap`}
                  aria-current="page"
                >
                  {item.label}
                </a>
                <div className="ml-[15px] mr-[15px] flex-1 max-h-0.5 border-t-2 [border-top-style:solid] border-white" />
              </div>
            ) : (
              <div
                className={
                  item.width === "w-[101px]"
                    ? "w-[101.47px]"
                    : item.width === "w-[99px]"
                      ? "w-[98.81px]"
                      : item.width === "w-[105px]"
                        ? "w-[105.2px]"
                        : item.width === "w-[172px]"
                          ? "w-[172.47px]"
                          : "w-[74.47px]"
                }
                flex
              >
                <a
                  href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`flex items-center justify-center mt-[4.4px] ${item.textWidth} h-3.5 ml-[15px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs tracking-[0.36px] leading-[normal] whitespace-nowrap`}
                >
                  {item.label}
                </a>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div
        className="absolute top-[15px] left-[calc(50.00%_+_683px)] w-[120px] h-[51px] bg-[url(/flashfit-2023-impilo-final-119w-png.png)] bg-cover bg-[50%_50%]"
        role="img"
        aria-label="Impilo Logo"
      />
    </header>
  );
};
