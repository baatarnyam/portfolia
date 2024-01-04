import Image from "next/image";

const Work = ({ children }) => {
  return (
    <div className="md:w-[1440px] md:h-[1848px] md:py-[96px] md:px-[80px] w-[375px] h-[2616px] py-[64px] px-[16px] dark:bg-gray-950 border border-solid">
      <div className="md:w-[1280px] md:h-[1656px] md:px-[32px] flex flex-col justify-between w-[343px] h-[2488px] border border-solid">
        <div className="md:w-[1216px] md:h-[72px] flex flex-col gap-[16px] w-[343px] h-[100px]">
          <div className="md:w-full md:h-[28px] flex justify-center">
            <div className="w-[75px] h-[28px] rounded-[12px] bg-gray-300 flex items-center justify-center text-sm text-gray-600 dark:text-gray-200 dark:bg-gray-500">
              Work
            </div>
          </div>
          <div className="md:w-full md:h-[28px] text-center md:text-[20px] text-gray-600 w-[343px] h-[56px] text-[18px] dark:text-gray-200">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        <div className="md:w-[1152px] md:h-[480px] md:flex rounded-[12px] drop-shadow-md w-[343px] h-[772px]">
          <div className="md:w-1/2 md:h-[480px] bg-gray-100 md:rounded-tl-[12px] md:rounded-bl-[12px] flex items-center justify-center w-[343px] h-[256px] rounded-tl-[12px] rounded-tr-[12px] dark:bg-gray-500">
            <Image
              src="/work.png"
              width={279}
              height={192}
              className="rounded-[12px] md:w-[480px] md:h-[384px]"
            />
          </div>
          <div className="md:w-1/2 md:h-[480px] bg-gray-50 md:rounded-tr-[12px] md:rounded-br-[12px] w-[343px] h-[516px] rounded-bl-[12px] rounded-br-[12px] p-[48px] flex flex-col gap-[24px] dark:bg-gray-700">
            <div className="md:w-[480px] md:h-[28px]">
              <div className="text-gray-950 md:text-[20px] font-600 dark:text-gray-200">
                FiSkil
              </div>
            </div>
            <div className="md:w-[480px] md:h-[96px] text-gray-600 text-[16px] dark:text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="md:w-[480px] md:h-[100px] border border-solid flex flex-wrap gap-[8px] w-[279px] h-[172px]">
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                React
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Next.js
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Typescript
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Nest.js
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Postgre.SQL
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Tailwindcss
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Figma
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Cypress
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Storybook
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Git
              </div>
            </div>
            <div className="md:w-[480px] md:h-[36px]">
              <Image src="/work-button.png" width={36} height={36} />
            </div>
          </div>
        </div>

        <div className="md:w-[1152px] md:h-[480px] md:flex rounded-[12px] drop-shadow-md w-[343px] h-[772px]">
          <div className="md:w-1/2 md:h-[480px] bg-gray-100 md:rounded-tl-[12px] md:rounded-bl-[12px] flex items-center justify-center w-[343px] h-[256px] rounded-tl-[12px] rounded-tr-[12px] dark:bg-gray-500">
            <Image
              src="/work.png"
              width={279}
              height={192}
              className="rounded-[12px] md:w-[480px] md:h-[384px]"
            />
          </div>
          <div className="md:w-1/2 md:h-[480px] bg-gray-50 md:rounded-tr-[12px] md:rounded-br-[12px] w-[343px] h-[516px] rounded-bl-[12px] rounded-br-[12px] p-[48px] flex flex-col gap-[24px] dark:bg-gray-700">
            <div className="md:w-[480px] md:h-[28px]">
              <div className="text-gray-950 md:text-[20px] font-600 dark:text-gray-200">
                FiSkil
              </div>
            </div>
            <div className="md:w-[480px] md:h-[96px] text-gray-600 text-[16px] dark:text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="md:w-[480px] md:h-[100px] border border-solid flex flex-wrap gap-[8px] w-[279px] h-[172px]">
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                React
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Next.js
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Typescript
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Nest.js
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Postgre.SQL
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Tailwindcss
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Figma
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Cypress
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Storybook
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Git
              </div>
            </div>
            <div className="md:w-[480px] md:h-[36px]">
              <Image src="/work-button.png" width={36} height={36} />
            </div>
          </div>
        </div>

        <div className="md:w-[1152px] md:h-[480px] md:flex rounded-[12px] drop-shadow-md w-[343px] h-[772px]">
          <div className="md:w-1/2 md:h-[480px] bg-gray-100 md:rounded-tl-[12px] md:rounded-bl-[12px] flex items-center justify-center w-[343px] h-[256px] rounded-tl-[12px] rounded-tr-[12px] dark:bg-gray-500">
            <Image
              src="/work.png"
              width={279}
              height={192}
              className="rounded-[12px] md:w-[480px] md:h-[384px]"
            />
          </div>
          <div className="md:w-1/2 md:h-[480px] bg-gray-50 md:rounded-tr-[12px] md:rounded-br-[12px] w-[343px] h-[516px] rounded-bl-[12px] rounded-br-[12px] p-[48px] flex flex-col gap-[24px] dark:bg-gray-700">
            <div className="md:w-[480px] md:h-[28px]">
              <div className="text-gray-950 md:text-[20px] font-600 dark:text-gray-200">
                FiSkil
              </div>
            </div>
            <div className="md:w-[480px] md:h-[96px] text-gray-600 text-[16px] dark:text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="md:w-[480px] md:h-[100px] border border-solid flex flex-wrap gap-[8px] w-[279px] h-[172px]">
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                React
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Next.js
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Typescript
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Nest.js
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Postgre.SQL
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Tailwindcss
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Figma
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Cypress
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Storybook
              </div>
              <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                Git
              </div>
            </div>
            <div className="md:w-[480px] md:h-[36px]">
              <Image src="/work-button.png" width={36} height={36} />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Work;
