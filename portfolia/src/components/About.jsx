import { GoDotFill } from "react-icons/go";
import Image from "next/image";

const About = ({ children }) => {
  return (
    <div className="md:w-[1440px] md:h-[962px] md:py-[96px] md:px-[80px] bg-gray-50 dark:bg-gray-900 w-[375px] h-[1690px] py-[64px] px-[16px]">
      <div className="md:w-[1280px] md:h-[770px] md:px-[32px] md:gap-[48px] flex flex-col w-[343px] h-[1562px] gap-[24px]">
        <div className="md:w-full h-28px flex items-center justify-center w-[343px]">
          <div className="w-[105px] h-[28px] rounded-[12px] text-[14px] bg-gray-200 text-gray-600 flex items-center justify-center dark:bg-gray-500 dark:text-gray-50">
            About me
          </div>
        </div>
        <div className="md:w-full md:h-[694px] md:flex gap-[48px] w-[343px] h-[1510px]">
          <div className="md:w-[584px] md:h-full relative w-[343px] h-[380px]">
            <div className="md:w-[400px] md:h-[480px] bg-gray-200 absolute z-0 md:top-[40px] w-[320px] h-[340px] border-[8px] border-solid top-[20px] left-[11.5px] dark:bg-gray-500"></div>
            <Image
              src={"/about.png"}
              width={280}
              height={360}
              className="absolute z-10 md:left-[40px] left-[31.5px] md:w-[400px] md:h-[480px]"
            />
          </div>
          <div className="md:w-[584px] md:h-full flex flex-col gap-[16px]">
            <div className="md:w-full md:h-[36px] md:text-[30px] text-gray-900 font-[600] text-[24px] dark:text-gray-100">
              Curious about me? Here you have it:
            </div>
            <div className="md:w-full md:h-[120px] text-base text-gray-600 font-normal dark:text-gray-100">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div className="text-base text-gray-600 font-normal dark:text-gray-100">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </div>
            <div className="text-base text-gray-600 font-normal dark:text-gray-100">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </div>
            <div className="text-base text-gray-600 font-normal dark:text-gray-100">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </div>
            <div className="text-base text-gray-600 font-normal dark:text-gray-100">
              Finally, some quick bits about me.
            </div>
            <div className="md:w-full md:h-[58px] flex gap-[10px]">
              <div className="md:w-[287px] md:h-[24px] text-base text-gray-600 font-normal dark:text-gray-100">
                <div className="md:flex md:items-center gap-2 flex">
                  <GoDotFill />
                  <div>B.E. in Computer Engineering</div>
                </div>
                <div className="flex items-center gap-2">
                  <GoDotFill />
                  <div>Full time freelancer</div>
                </div>
              </div>
              <div className="md:w-[287px] md:h-[24px] text-base text-gray-600 font-normal dark:text-gray-100">
                <div className="flex items-center gap-2">
                  <GoDotFill />
                  <div>Avid learner</div>
                </div>
                <div className="flex items-center gap-2">
                  <GoDotFill />
                  <div>Aspiring indie hacker</div>
                </div>
              </div>
            </div>
            <div className="text-base text-gray-600 font-normal dark:text-gray-100">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default About;
