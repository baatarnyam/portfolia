import Image from "next/image";

const Skills = ({ children }) => {
  return (
    <div className="md:w-[1440px] md:h-[560px] md:py-[96px] md:px-[80px] bg-white w-[375px] h-[916px] py-[64px] px-16px dark:bg-gray-800">
      <div className="md:w-[1280px] md:h-[368px] md:px-[32px] flex flex-col gap-[48px]">
        <div className="md:w-[1216px] md:h-[72px] flex flex-col gap-[16px]">
          <div className="md:w-full md:h-[28px] flex justify-center items-center">
            <div className="w-[75px] h-[28px] rounded-[12px] bg-gray-200 text-gray-600 flex justify-center items-center text-[14px]">
              Skills
            </div>
          </div>
          <div className="md:w-full md:h-[28px] flex justify-center items-center md:text-[20px] md:text-gray-600 font-normal w-[343px] h-[56px] text-[18px] text-center dark:text-gray-300">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
        <div className="md:w-[1216px] md:h-[248px] flex flex-wrap md:gap-x-[59px] md:gap-y-[35px] w-[343px] h-[664px] gap-x-[20px]">
          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px] ">
            <div>
              <Image src="/icon-javscript.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Javascript
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-typescript.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Typescript
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-react.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              React
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/Group.png" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Next.js
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-nodejs.svg" width={56} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Node.js
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-express.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Express.js
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-nest.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Nest.js
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-socket.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Socket.io
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px] ">
            <div>
              <Image src="/icon-postgresql.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              PostgreSQL
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-mongodb.svg" width={30} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              MongoDB
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-sass.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Sass/Scss
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-tailwindcss.svg" width={104} height={62} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Tailwindcss
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px] ">
            <div>
              <Image src="/icon-figma.svg" width={42} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Figma
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-cypress.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Cypress
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-storybook.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Storybook
            </div>
          </div>

          <div className="w-[100px] h-[100px] flex flex-col items-center gap-[8px]">
            <div>
              <Image src="/icon-git.svg" width={64} height={64} />
            </div>
            <div className="text-[18px] text-gray-600 font-normal dark:text-gray-300">
              Git
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Skills;
