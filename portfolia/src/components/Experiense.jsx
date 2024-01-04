import Image from "next/image";

const Experience = ({ children }) => {
  return (
    <div className="md:w-[1440px] md:h-[1140px] md:py-[96px] md:px-[80px] bg-gray-50 w-[375px] h-[1308px] py-[64px] px-[16px] dark:bg-gray-900">
      <div className="md:w-[1280px] md:h-[948px] md:px-[32px] md:gap-[48px] flex flex-wrap justify-center w-[343px] h-[1180px] gap-[24px]">
        <div className="md:w-[1216px] md:h-[72px] flex flex-col gap-[16px] w-[343px] h-[100px]">
          <div className="w-full h-[28px] flex justify-center items-center">
            <div className="w-[115px] h-[28px] rounded-[12px] bg-gray-200 flex items-center justify-center text-[14px] font-500 text-gray-600 dark:bg-gray-500 dark:text-gray-200">
              Experiense
            </div>
          </div>
          <div className="md:text-[20px] font-normal text-center text-gray-600 text-[18px] dark:text-gray-200">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <div className="md:w-[896px] md:h-[288px] rounded-[12px] p-[32px] gap-[16px] w-[343px] h-[372px] ">
          <div className="md:w-[832px] md:h-[224px] md:flex md:gap-[48px] w-[279px] h-[308px] gap-[16px] relative ">
            <div className="md:w-[206px] h-[28px] mb-[50px]">
              <Image src="/logo-upwork.png" width={102} height={28} />
            </div>
            <div className="md:w-[384px] md:h-[224px] flex flex-col gap-[16px]">
              <div className="w-full  h-[28px] md:text-[20px] text-gray-700 font-600 text-[18px] dark:text-white">
                Sr.Frontend Developer
              </div>

              <ul className="list-disc w-full h-[180px] flex flex-col gap-[4px] md:pl-[15px] pl-[23px] mb-[16px]">
                <li className="text-gray-600 text-[16px] font-normal dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="text-gray-600 text-[16px] font-normal dark:text-gray-400">
                  Ut pretium arcu et massa semper, id fringilla leo semper.
                </li>
                <li className="text-gray-600 text-[16px] font-normal dark:text-gray-400">
                  Sed quis justo ac magna.
                </li>
                <li className="text-gray-600 text-[16px] font-normal dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <div className="w-[148px] h-[24px] md:text-base text-sm text-gray-700 dark:text-gray-400 absolute top-[40px] md:right-0 md:top-0">
              Nov 2021 - Present
            </div>
          </div>
        </div>
        <div className="md:w-[896px] md:h-[264px] rounded-[12px] p-[32px] gap-[16px] w-[343px] h-[348px] ">
          <div className="md:w-[832px] md:h-[200px] md:flex md:gap-[48px] w-[279px] h-[284px] gap-[16px] relative">
            <div className="md:w-[206px] h-[28px] mb-[50px]">
              <Image src="/logo-upwork.png" width={102} height={28} />
            </div>
            <div className="md:w-[384px] md:h-[224px] flex flex-col gap-[16px]">
              <div className="w-full  h-[28px] md:text-[20px] text-gray-700 font-600 text-[18px] dark:text-white">
                Team Lead
              </div>

              <ul className="list-disc w-full h-[180px] flex flex-col gap-[4px] md:pl-[15px] pl-[23px] mb-[16px]">
                <li className="text-gray-600 text-[16px] font-normal dark:text-gray-400">
                  Sed quis justo ac magna.
                </li>
                <li className="text-gray-600 text-[16px] font-normal dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="text-gray-600 text-[16px] font-normal dark:text-gray-400">
                  Sed quis justo ac magna.
                </li>
                <li className="text-gray-600 text-[16px] font-normal dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <div className="w-[148px] h-[24px] md:text-base text-sm text-gray-700 dark:text-gray-400 absolute top-[40px] md:right-0 md:top-0">
              Jul 2017 - Oct 2021
            </div>
          </div>
        </div>
        <div className="md:w-[896px] md:h-[180px] rounded-[12px] p-[32px] gap-[16px] w-[343px] h-[288px]">
          <div className="md:w-[832px] md:h-[116px] md:flex md:gap-[48px] w-[279px] h-[224px] gap-[16px] relative">
            <div className="md:w-[206px] h-[28px] mb-[50px]">
              <Image src="/logo-upwork.png" width={102} height={28} />
            </div>
            <div className="md:w-[384px] md:h-[224px] flex flex-col gap-[16px]">
              <div className="w-full  h-[28px] md:text-[20px] text-gray-700 font-600 text-[18px] dark:text-white">
                Full Stack Developer
              </div>

              <ul className="list-disc w-full h-[180px] flex flex-col gap-[4px] md:pl-[15px] pl-[23px] mb-[16px]">
                <li className="text-gray-600 text-[16px] font-normal dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <div className="w-[148px] h-[24px] md:text-base text-sm text-gray-700 dark:text-gray-400 absolute top-[40px] md:right-0 md:top-0">
              Dec 2015 - May 2017
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Experience;
