import Image from "next/image";
import { LuCopy } from "react-icons/lu";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { HiOutlinePhone } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";

const Footer = ({ children }) => {
  return (
    <div className="md:w-[1440px] md:h-[560px] md:py-[96px] md:px-[80px] w-[375px] h-[472px] py-[64px] px-[16px]">
      <div className="md:w-[1280px] md:h-[368px] md:px-[32px] flex flex-col items-center justify-between w-[343px] h-[344px]">
        <div className="md:w-[1216px] md:h-[100px] flex flex-col gap-[16px]">
          <div className="md:w-full md:h-[28px] flex items-center justify-center">
            <div className="w-fit h-[28px] bg-gray-200 rounded-[12px] text-gray-500 text-[14px] py-[4px] px-[20px]">
              Get in touch
            </div>
          </div>
          <div className="md:w-full md:h-[56px] flex justify-center">
            <div className="md:w-[576px] md:h-[56px] text-center text-[20px] text-gray-600 dark:text-gray-200">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </div>
          </div>
        </div>
        <div className="md:w-[596px] md:h-[104px] w-[332px] h-[72px] flex flex-col justify-between items-center">
          <div className="md:w-full md:h-[44px] flex justify-between items-center w-[332px] h-[36px]">
            <div>
              <PiEnvelopeSimpleLight className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]" />
            </div>
            <div className="md:text-[36px] text-gray-900 font-600 dark:text-gray-200">
              reachsagarshah@gmail.com
            </div>
            <div>
              <LuCopy className="md:w-[35px] md:h-[35px] w-[20px] h-[20px]" />
            </div>
          </div>

          <div className="md:w-full md:h-[44px] flex md:gap-[16px] md:justify-center items-center justify-between w-[241px] h-[36px]">
            <div>
              <HiOutlinePhone className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]" />
            </div>
            <div className="md:text-[36px] text-gray-900 font-600 text-[18px] dark:text-gray-200">
              +91 8980500565
            </div>
            <div>
              <LuCopy className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
        <div className="md:w-full md:h-[68px] w-[343px] h-[68px] flex items-center justify-center">
          <div className="w-[312px] h-[68px] flex flex-col justify-between ">
            <div className="md:w-full md:h-[24px] text-base text-gray-600 dark:text-gray-200 ">
              You may also find me on these platforms!
            </div>
            <div className="w-full h-[36px] flex gap-[16px] items-center justify-center ">
              <FiGithub className="w-[24px] h-[24px]" />
              <FiTwitter className="w-[24px] h-[24px]" />
              <FaFigma className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Footer;
