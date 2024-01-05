import Image from "next/image";

const FooterBottom = ({ children }) => {
  return (
    <div className="md:w-[1440px] md:h-[68px] flex items-center w-[375px] h-[68px] justify-center bg-gray-50 dark:bg-gray-950">
      <div className="md:w-[1280px] md:h-[20px] flex items-center justify-center w-[375px] h-[20px]">
        <div>
          <Image src="/footerBottom.png" width={16} height={16} />
        </div>
        <div className="md:w-[359px] h-[20px] text-[14px] font-normal text-gray-600 dark:text-gray-200 w-[335px]">
          2023 |{" "}
          <a href="https://www.figma.com/@shahsagarm" className=" underline">
            Designed
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/shahsagarm/sagarshah.dev"
            className=" underline"
          >
            coded
          </a>{" "}
          with ❤️️ by Sagar Shah
        </div>
      </div>
      {children}
    </div>
  );
};
export default FooterBottom;
