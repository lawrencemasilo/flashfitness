import React from "react";
import { ContactUsSection } from "../components/ContactUsSection";
import { CustomDesignSection } from "../components/CustomDesignSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { HeroSection } from "../components/HeroSection";
import { InfoWrapperSection } from "../components/InfoWrapperSection";
import { MainBackgroundSection } from "../components/MainBackgroundSection";
import { ServiceContainerSection } from "../components/ServiceContainerSection";
import { ServicesSection } from "../components/ServicesSection";
import { StatisticsSection } from "../components/StatisticsSection";
import { WhatWeDoSection } from "../components/WhatWeDoSection";
import { WhyFlashSection } from "../components/WhyFlashSection";

export const Home = () => {
  return (
    <div className="relative w-[1920px] h-[6126px] flex bg-[linear-gradient(0deg,rgba(238,238,238,1)_0%,rgba(238,238,238,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <div className="z-[1] h-[6126.33px] flex-1 relative flex flex-col bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <div className="flex-1 max-h-[5874.23px] relative mt-[81.1px] overflow-y-scroll">
          <ContactUsSection />
          <MainBackgroundSection />
          <div className="absolute w-full top-[1311px] left-0 h-[178px] flex justify-center bg-white">
            <div className="flex items-center justify-center mt-[95.5px] w-[131.11px] h-[37px] ml-[0.3px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#284053] text-3xl text-center tracking-[0] leading-[normal]">
              Services
            </div>
          </div>

          <ServiceContainerSection />
          <InfoWrapperSection />
          <StatisticsSection />
          <div className="absolute w-full top-[1935px] left-0 h-[149px] flex flex-col items-center gap-0.5 bg-white">
            <div className="h-[103px] w-[103px] flex justify-center">
              <div className="w-[103px] h-[17px] flex justify-center">
                <div className="w-[103px] h-[103px] aspect-[1] bg-[url(/ICONS-11-123w-png.png)] bg-cover bg-[50%_50%]" />
              </div>
            </div>

            <div className="flex items-center justify-center ml-[0.2px] h-[42px] w-[126.77px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#284053] text-lg text-center tracking-[0] leading-[normal]">
              SERVICE &amp;
              <br />
              MAINTENANCE
            </div>
          </div>

          <div className="absolute w-full top-[2084px] left-0 h-20 bg-white" />

          <CustomDesignSection />
          <HeroSection />
          <div className="absolute w-full top-[3546px] left-0 h-[549px] flex bg-white">
            <div className="h-[534.39px] ml-[480px] mr-[480px] flex-1 bg-[url(/concolidated-offering-1152w-png.png)] bg-cover bg-[50%_50%]" />
          </div>

          <div className="absolute w-full top-[4095px] left-0 h-[383px] flex flex-col bg-[linear-gradient(0deg,rgba(65,67,69,1)_0%,rgba(65,67,69,1)_100%)]">
            <div className="h-[17px] w-[60px] self-center mt-[184.5px] flex">
              <div className="mt-[-57px] w-[60px] h-[71px]">
                <div className="relative w-[100.00%] h-[84.51%] top-[7.75%] bg-[url(/vector-smart-object.png)] bg-[100%_100%]" />
              </div>
            </div>

            <div className="ml-[918px] mr-[918px] flex-1 max-h-[3px] mt-[7px] border-t-[3px] [border-top-style:solid] border-[#dadada]" />

            <div className="flex items-center justify-center ml-[0.2px] h-[27px] w-[388.37px] self-center mt-2 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              FLASH&#39;S INTEGRATED OFFERING
            </div>
          </div>

          <div className="absolute w-full top-[4478px] left-0 h-[389px] flex bg-[#b5b5b5]">
            <div className="mt-[59.5px] h-[269.78px] ml-[480px] mr-[480px] flex-1 relative">
              <div className="absolute w-[50.00%] h-full top-0 left-0 flex justify-center bg-[url(/background.png)] bg-cover bg-[50%_50%]">
                <div className="w-[480px] h-[269.78px] flex justify-center">
                  <div className="w-[480px] h-[17px] flex justify-center">
                    <div className="w-[480px] h-[269.78px] aspect-[1.78] bg-[url(/umtata-level-2-view39-576w-png.png)] bg-cover bg-[50%_50%]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[61px] left-[510px] w-[300px] h-[37px] flex items-center justify-center [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#414345] text-3xl tracking-[0] leading-[normal]">
                3D Custom Design
              </div>

              <div className="absolute w-[calc(100%_-_876px)] top-[108px] left-[510px] h-[3px] border-t-[3px] [border-top-style:solid] border-[#dadada]" />
            </div>
          </div>

          <div className="absolute w-full top-[4867px] left-0 h-20 bg-white" />

          <ServicesSection />
          <WhatWeDoSection />
        </div>

        <WhyFlashSection />
      </div>

      <FeaturesSection />
    </div>
  );
};
