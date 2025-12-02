import React from "react";
//import border from "./border.svg";

export const CustomDesignSection = () => {
  return (
    <section className="absolute w-full top-[2164px] left-0 h-[1036px] bg-[url(/background-3.png)] bg-cover bg-[50%_50%]">
      <div
        className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(90deg,rgba(222,97,97,1)_0%,rgba(38,87,235,1)_100%)] opacity-90"
        aria-hidden="true"
      />

      <h2 className="absolute top-[68px] left-[calc(50.00%_-_208px)] w-[417px] h-[79px] flex items-center justify-center [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[65px] text-center tracking-[0] leading-[normal]">
        What We Do
      </h2>

      <p className="absolute top-[157px] left-[calc(50.00%_-_83px)] w-[167px] h-[22px] flex items-center justify-center [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[19.2px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Energizing Spaces
      </p>

      {/*<img
        className="absolute top-[261px] left-[480px] w-[960px] h-[680px]"
        alt="Custom design showcase featuring an energizing fitness space"
        src={border}
      />*/}
    </section>
  );
};
