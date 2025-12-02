import React from "react";

export const WhyFlashSection = () => {
  const contactInfo = {
    address: "Axminister Drive, Johannesburg, South Africa 2055",
    phone: "011 568 3782",
    email: "info@flash-fitness.co.za",
  };

  return (
    <footer className="flex-1 max-h-[171px] mt-0 flex bg-[#414345] overflow-y-scroll">
      <div className="mt-[30px] h-[111px] ml-[480px] mr-[480px] flex-1 relative">
        <div className="absolute top-0 left-[334px] w-[121px] h-[45px] flex justify-center">
          <div className="w-[120.55px] h-[17px] flex justify-center">
            <img
              src="/flashfit-2020-logo-red-01-144w-png.png"
              alt="FlashFit 2020 Logo"
              className="w-[120.55px] h-[44.77px] aspect-[2.69] object-cover object-center"
            />
          </div>
        </div>

        <img
          src="/flashfit-2023-impilo-final-125w-png.png"
          alt="FlashFit 2023 Impilo Logo"
          className="absolute top-[45px] left-[calc(50.00%_-_140px)] w-[105px] h-11 object-cover object-center"
        />

        <h2 className="absolute top-0.5 left-[494px] w-[110px] h-[19px] flex items-center justify-center [font-family:'Montserrat-Bold',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[normal]">
          <span className="font-bold">CONTAC</span>
          <span className="[font-family:'Montserrat-Thin',Helvetica] font-thin">
            {" "}
          </span>
          <span className="font-bold">T US</span>
        </h2>

        <address className="absolute top-[53px] left-[494px] w-[310px] h-12 flex items-center justify-center [font-family:'Roboto-Light',Helvetica] font-light text-[#eaeaea] text-sm tracking-[0] leading-[normal] not-italic">
          {contactInfo.address}
          <br />
          Landline: {contactInfo.phone}
          <br />
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-[#eaeaea] hover:underline"
          >
            {contactInfo.email}
          </a>
        </address>
      </div>
    </footer>
  );
};
