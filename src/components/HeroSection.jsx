import React from "react";

export const HeroSection = () => {
  const contentData = {
    title: "WHY FLASH",
    paragraphs: [
      "Let Flash Fitness tailor make an exceptional health & fitness solution to help improve the productivity of your space. Our team possess extensive in depth knowledge and experience in the South African health and fitness industry that has spanned for decades.",
      "With the latest in technology and digitization let us take you through a turn-key journey that covers every element of your needs.",
      "Outsource your solution, then sit back and enjoy the benefits of your offering running like clockwork.",
    ],
  };

  return (
    <section className="absolute w-full top-[3200px] left-0 h-[346px] flex bg-white">
      <div className="mt-[75px] ml-[480px] mr-[480px] flex-1 w-[960px] flex flex-col gap-5 bg-white">
        <h2 className="flex items-center justify-center ml-[12.5px] w-[318.61px] h-[61px] mt-2.5 [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#9f2828] text-[50px] tracking-[0] leading-[normal]">
          {contentData.title}
        </h2>

        <div className="mr-10 flex-1 max-h-[172px] flex flex-col gap-[22px]">
          <p className="flex items-center justify-center w-[918.68px] h-[62px] mt-0.5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#313131] text-[16.7px] tracking-[0] leading-[normal]">
            {contentData.paragraphs[0].split(". ")[0]}.
            <br />
            {contentData.paragraphs[0].split(". ")[1]}
            <br />
            {contentData.paragraphs[0].split(". ")[2]}.
          </p>

          <p className="flex items-center justify-center w-[917.72px] h-[41px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#313131] text-[16.7px] tracking-[0] leading-[normal]">
            {contentData.paragraphs[1].split(" of")[0]} of
            <br />
            {contentData.paragraphs[1].split(" of")[1]}.
          </p>

          <p className="flex items-center justify-center w-[798.33px] h-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#313131] text-[16.7px] tracking-[0] leading-[normal] whitespace-nowrap">
            {contentData.paragraphs[2]}
          </p>
        </div>
      </div>
    </section>
  );
};
