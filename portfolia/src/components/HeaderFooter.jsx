import { SlLocationPin } from "react-icons/sl";
import { RiGithubLine } from "react-icons/ri";
import { PiTwitterLogoBold } from "react-icons/pi";
import { FiFigma } from "react-icons/fi";

import Image from "next/image";

const HeaderFooter = (props) => {
  return (
    <div className="md:w-[1440px] md:h-[552px] md:py-[96px] md:px-[80px] md:items-center md:justify-center md:flex w-[375px] h-[880px] py-[64px] px-16px flex flex-col items-center ">
      <div className="md:w-[1280px] md:h-[360px] md:py-0 md:px-[32px] md:gap-[48px] md:flex w-[343px] h-[752px] gap-[48px] flex flex-col justify-end relative ">
        <div className="md:w-[768px] md:h-[360px] md:gap-[48px] w-[343px] h-[404px] flex flex-col items-center gap-[48px]">
          <div className="md:w-[768px] md:h-[152px] w-[343px] h-[216px] gap-[8px] flex flex-col">
            <p className="md:w-[768px] md:h-[72px] md:text-[60px] md:text-gray-900 md:flex md:items-center w-[260px] h-[40px] text-[36px] text-gray-600 flex items-center dark:text-white">
              Hi, I’m Sagar👋
            </p>
            <p className="md:w-[768px] md:h-[72px] md:text-base md:font-normal md:text-gray-600 w-[343px] h-[168px] text-[16px] dark:text-gray-300">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="md:w-[768px] md:h-[56px] w-[343px] h-[56px] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <SlLocationPin />
              <p className="text-base text-gray-600 font-normal dark:text-gray-300">
                Ahmedabad, India
              </p>
            </div>
            <div className="flex items-center gap-2 px-[4px]">
              <div className="w-[8px] h-[8px] bg-lime-500 rounded-[20px]"></div>
              <p className="text-base text-gray-600 font-normal dark:text-gray-300">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="md:w-full md:h-[36px] flex gap-[16px] w-[343px] h-[36px]">
            <RiGithubLine />
            <PiTwitterLogoBold />
            <FiFigma />
          </div>
        </div>
        <div className="md:w-[400px] md:h-[360px] md:right-0 w-[343px] h-[300px] absolute top-0">
          <Image
            src="/Pic.png"
            width={240}
            height={280}
            className="absolute z-10 md:w-[280px] md:h-[320] left-[52px]"
          />
          <div className="md:w-[280px] md:h-[320px] md:bg-gray-200 border-[8px] border-solid absolute z-0 md:bottom-0 md:right-[80px] w-[280px] h-[280px] top-[20px] left-[31.5px] dark:bg-gray-600 dark:border-none"></div>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default HeaderFooter;
