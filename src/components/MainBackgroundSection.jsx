import React from "react";
//import image from "./image.svg";

export const MainBackgroundSection = () => {
  return (
    <section className="absolute w-full top-[840px] left-0 h-[471px] bg-[url(/background-2.png)] bg-cover bg-[50%_50%]">
      <div
        className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(90deg,rgba(159,40,40,1)_0%,rgba(97,97,97,1)_100%)] opacity-[0.77]"
        aria-hidden="true"
      />

      <h2 className="absolute top-[104px] left-[calc(50.00%_-_343px)] w-[687px] h-[61px] flex items-center justify-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[50px] text-center tracking-[0] leading-[normal]">
        SERVICE &amp; MAINTENANCE
      </h2>

      <p className="absolute top-[174px] left-[calc(50.00%_-_273px)] w-[546px] h-[45px] flex items-center justify-center [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal]">
        FOR A PREMIUM HIGH-END PROFESSIONAL APPROACH
        <br />
        CONTACT US NOW!
      </p>

      <div
        className="absolute top-[290px] left-[calc(50.00%_-_30px)] w-[60px] h-[17px] flex"
        aria-hidden="true"
      >
        <div className="mt-[-57px] w-[60px] h-[71px] relative">
          <img
            className="absolute w-[68.50%] h-[57.80%] top-[21.10%] left-[19.90%]"
            alt=""
            src="https://unsplash.com/photos/a-person-holding-a-bottle-SY74cxzrZag"
          />
        </div>
      </div>

      <button
        className="absolute top-[314px] left-[calc(50.00%_-_103px)] w-[206px] h-[51px] flex justify-center items-center bg-white rounded-[50px] border border-solid cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Get Fixed - Contact us for service and maintenance"
      >
        <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#666666] text-[14.4px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Get Fixed
        </span>
      </button>
    </section>
  );
};
