import React, { useState } from "react";

export const ServicesSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="absolute w-full top-[4947px] left-0 h-[623px] flex flex-col bg-white">
      <h2 className="flex items-center justify-center ml-[0.9px] h-[37px] w-[172.65px] self-center mt-[72px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#414345] text-3xl text-center tracking-[0] leading-[normal]">
        Contact Us
      </h2>

      <div className="h-[54px] w-[578px] self-center mt-[17px] flex flex-col items-center gap-[19px]">
        <p className="flex items-center justify-center ml-[0.2px] h-[17px] w-[195.56px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#666666] text-[15.1px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          We&apos;d love to hear from you.
        </p>

        <p className="flex items-center justify-center ml-[0.2px] h-[17px] w-[565.86px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#666666] text-[15.1px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Please send us a message using the form below we&apos;ll get back to
          you in a flash.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="ml-[583px] mr-[583px] flex-1 max-h-[365px] relative mt-2"
      >
        <div className="absolute w-[calc(100%_-_407px)] top-[25px] left-[15px] h-4 flex">
          <label
            htmlFor="name"
            className="flex items-center justify-center w-[40.65px] h-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#666666] text-[13.9px] tracking-[0] leading-[normal] whitespace-nowrap"
          >
            NAME
          </label>
        </div>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="absolute w-[calc(100%_-_407px)] top-11 left-[15px] h-10 border border-solid border-[#d8d8d8] px-3 py-2 focus:outline-none focus:border-[#414345] transition-colors"
          aria-label="Name"
        />

        <div className="w-[calc(100%_-_407px)] top-[25px] left-[392px] absolute h-4 flex">
          <label
            htmlFor="phone"
            className="flex items-center justify-center w-[50px] h-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#666666] text-sm tracking-[0] leading-[normal] whitespace-nowrap"
          >
            PHONE
          </label>
        </div>

        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="absolute w-[calc(100%_-_407px)] top-11 left-[392px] h-10 border border-solid border-[#d8d8d8] px-3 py-2 focus:outline-none focus:border-[#414345] transition-colors"
          aria-label="Phone"
        />

        <div className="w-[calc(100%_-_30px)] top-[97px] left-[15px] absolute h-4 flex">
          <label
            htmlFor="email"
            className="flex items-center justify-center w-[42.22px] h-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#666666] text-sm tracking-[0] leading-[normal] whitespace-nowrap"
          >
            EMAIL
          </label>
        </div>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="absolute w-[calc(100%_-_30px)] top-[116px] left-[15px] h-10 border border-solid border-[#d8d8d8] px-3 py-2 focus:outline-none focus:border-[#414345] transition-colors"
          aria-label="Email"
        />

        <div className="w-[calc(100%_-_30px)] top-[169px] left-[15px] absolute h-4 flex">
          <label
            htmlFor="message"
            className="flex items-center justify-center w-[69.45px] h-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#666666] text-sm tracking-[0] leading-[normal] whitespace-nowrap"
          >
            MESSAGE
          </label>
        </div>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="absolute w-[calc(100%_-_30px)] top-[188px] left-[15px] h-20 overflow-auto border border-solid border-[#d8d8d8] px-3 py-2 resize-none focus:outline-none focus:border-[#414345] transition-colors"
          aria-label="Message"
        />

        <button
          type="submit"
          className="absolute top-[291px] left-[calc(50.00%_-_140px)] w-[280px] h-[39px] flex items-center rounded-[50px] border border-solid border-[#414345] hover:bg-[#414345] hover:text-white transition-colors cursor-pointer"
          aria-label="Send message"
        >
          <div className="h-[37px] ml-[2.06%] w-[272.44px] mr-[0.64%] flex-1 flex justify-center rounded-[5px] overflow-hidden">
            <div className="mt-2.5 w-[35.25px] h-[17px] ml-[0.2px] [font-family:'Inter-Regular',Helvetica] text-[14.5px] text-center tracking-[0] flex items-center justify-center font-normal leading-[normal] whitespace-nowrap">
              Send
            </div>
          </div>
        </button>
      </form>
    </section>
  );
};
