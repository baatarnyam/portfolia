import { SlLocationPin } from "react-icons/sl";
import { RiGithubLine } from "react-icons/ri";
import { PiTwitterLogoBold } from "react-icons/pi";
import { FiFigma } from "react-icons/fi";

import Image from "next/image";

const HeaderFooter = (props) => {
  return (
    <div className="md:w-[1440px] md:h-[552px]  md:items-center md:justify-center flex border border-solid py-[96px] px-[80px">
      <div className="md:w-[1280px] md:h-[360px] flex px-[32px] gap-[48px] border border-solid">
        <div className="md:w-[768px] md:h-360px flex flex-col gap-[48px]">
          <div className="md:w-full md:h-152px flex flex-col">
            <p className="text-[60px] text-gray-900 mb-2 dark:text-white">
              Hi, I’m Sagar 👋
            </p>
            <p className="text-base font-normal text-gray-600 dark:text-gray-300">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="flex flex-col gap-2 border border-solid">
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
          <div className="md:w-full md:h-[36px] flex gap-[16px]">
            <RiGithubLine />
            <PiTwitterLogoBold />
            <FiFigma />
          </div>
        </div>
        <div className="md:w-[400px] md:h-[360px] border border-solid relative">
          <div className="">
            <Image
              src="/Pic.png"
              width={280}
              height={320}
              className="absolute left-[80px] z-10"
            />
          </div>
          <div className="md:w-[280px] md:h-[320px] border-[8px] bg-gray-200 border-solid absolute top-[40px] right-0 z-0 dark:bg-gray-600 dark:border-black"></div>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default HeaderFooter;
