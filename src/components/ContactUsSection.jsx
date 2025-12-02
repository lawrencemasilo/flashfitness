import React from "react";

export const ContactUsSection = () => {
  return (
    <section
      className="absolute w-full top-0 left-0 h-[840px]"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute w-full h-full top-0 left-0 bg-white opacity-50"
        aria-hidden="true"
      />

      <div className="absolute w-[calc(100%_-_1451px)] top-[81px] left-[726px] h-[365px] flex justify-center">
        <div className="w-[469px] h-[17px] flex justify-center">
          <img
            src="/kisspng-sprint-stock-photography-running-starting-blocks-athlete-5b17299e5d5517-0080712215282446383823shoped-copy-562w-png.png"
            alt="Athlete sprinting from starting blocks"
            className="w-[469px] h-[365.14px] aspect-[1.28] object-cover object-center"
          />
        </div>
      </div>

      <div className="absolute top-[470px] left-[calc(50.00%_-_240px)] w-[480px] h-[130px] flex justify-center">
        <div className="w-[480px] h-[17px] flex justify-center">
          <img
            src="/flashfit-logo-red-01-eb315b60-576w-png.png"
            alt="FlashFit logo"
            className="w-[480px] h-[129.92px] aspect-[3.69] object-cover object-center"
          />
        </div>
      </div>

      <h2
        id="contact-heading"
        className="absolute top-[643px] left-[calc(50.00%_-_233px)] w-[467px] h-[41px] flex items-center justify-center [font-family:'Inter-Regular',Helvetica] font-normal text-white text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap"
      >
        ENERGIZING YOUR SPACE
      </h2>

      <a
        href="#get-started"
        className="absolute top-[708px] left-[calc(50.00%_-_103px)] w-[206px] h-[51px] flex justify-center bg-white rounded-[50px] border border-solid cursor-pointer transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        aria-label="Get started with FlashFit"
      >
        <span className="w-[76.92px] text-[13.9px] flex items-center justify-center mt-[17px] h-[17px] ml-[-0.3px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#666666] text-center tracking-[0] leading-[normal]">
          Get Started
        </span>
      </a>
    </section>
  );
};
