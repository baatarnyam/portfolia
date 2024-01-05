import Image from "next/image";

const Work = ({ children }) => {
  const array = [
    {
      title: "FiSkil",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      priority: [
        "React",
        "Next.js",
        "Typescript Nest.js",
        "Postgre.SQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      title: "FiSkil",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      priority: [
        "React",
        "Next.js",
        "Typescript Nest.js",
        "Postgre.SQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      title: "FiSkil",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      priority: [
        "React",
        "Next.js",
        "Typescript Nest.js",
        "Postgre.SQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  ];
  return (
    <div className="md:w-[1440px] md:h-[1848px] md:py-[96px] md:px-[80px] w-[375px] h-[2616px] py-[64px] px-[16px] dark:bg-gray-950">
      <div className="md:w-[1280px] md:h-[1656px] md:px-[32px] flex flex-col justify-between w-[343px] h-[2488px]">
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

        {array.map(({ des, priority, title }, index) => (
          <div
            className={`md:w-[1152px] md:h-[480px] md:flex rounded-[12px] drop-shadow-md w-[343px] h-[772px] overflow-hidden ${
              index % 2 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="md:w-1/2 md:h-[480px] bg-gray-100 flex items-center justify-center w-[343px] h-[256px] dark:bg-gray-500">
              <Image
                src="/work.png"
                width={279}
                height={192}
                className="rounded-[12px] md:w-[480px] md:h-[384px]"
              />
            </div>

            <div className="md:w-1/2 md:h-[480px] bg-gray-50 w-[343px] h-[516px] p-[48px] flex flex-col gap-[24px] dark:bg-gray-700">
              <p key={index}>
                <div className="md:w-[480px] md:h-[28px]">
                  <div className="text-gray-950 md:text-[20px] font-600 dark:text-gray-200">
                    {title}
                  </div>
                </div>
              </p>

              <p className="md:w-[480px] md:h-[96px] text-gray-600 text-[16px] dark:text-gray-500">
                {des}
              </p>
              <div className="md:w-[480px] md:h-[100px] flex flex-wrap gap-[8px] w-[279px] h-[172px]">
                {priority.map((item) => (
                  <div className="w-fit h-[28px] bg-gray-300 rounded-[12px] flex items-center justify-center text-gray-600 px-[20px] py-[4px] dark:text-gray-400 dark:bg-gray-600">
                    {item}
                  </div>
                ))}
              </div>
              <div className="md:w-[480px] md:h-[36px]">
                <Image src="/work-button.png" width={36} height={36} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};
export default Work;
