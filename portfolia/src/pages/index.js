import About from "@/components/About";
import Work from "@/components/work";
import HeaderFooter from "@/components/HeaderFooter";
import Skills from "@/components/Skills";
import Experience from "@/components/Experiense";

import { Menu } from "@/components/Menu";
import { motion } from "framer-motion";

import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";

import { useTheme } from "next-themes";

export default function home() {
  const { theme, setTheme } = useTheme();
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const handleMenuClicked = () => {
    setIsMenuClicked((previousState) => !previousState);
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-10">
      <div className="md:w-[1440px] md:h-full w-[375px] h-[68px]">
        <div className="md:w-[1440px] md:h-[68px] w-[375px] md:flex md:items-center flex flex-col items-center px-2.5 gap-5 ">
          <div className="w-[375px] h-[36px] md:w-[1280px] flex items-center justify-between px-8">
            <div>{"<SS/>"}</div>
            <div className="md:w-[554px] md:h-full md:flex">
              <div className="hidden md:flex md:gap-6 md:items-center">
                <button className="text-base text-gray-600 font-medium dark:text-white">
                  About
                </button>

                <button className="text-base text-gray-600 font-medium dark:text-white">
                  Work
                </button>

                <button className="text-base text-gray-600 font-medium dark:text-white">
                  Testimonials
                </button>

                <button className="text-base text-gray-600 font-medium dark:text-white">
                  Contact
                </button>

                <div className="w-[188px] h-full flex gap-4 items-center cursor-pointer">
                  <div
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? (
                      <FiSun className="active:scale-110" />
                    ) : (
                      <LuMoonStar className="active:scale-110" />
                    )}
                  </div>

                  <button className="w-32 h-9 border-solid border rounded-xl bg-gray-900 text-gray-50 text-base dark:bg-white dark:text-black">
                    Download CV
                  </button>
                </div>
              </div>
              <button onClick={handleMenuClicked}>
                {isMenuClicked ? (
                  <IoCloseCircleOutline />
                ) : (
                  <FiMenu className="flex md:hidden" />
                )}
              </button>
            </div>
          </div>
          {isMenuClicked && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0" }}
              exit={{ x: "150%", duration: 1 }}
              className="w-[375px] h-[400px] fixed top-20 "
            >
              <div className="w-[320px] h-[500px] flex flex-col">
                <div className="w-[320px] h-176 flex flex-col gap-4 p-4 border-solid border border-gray-100 border-x-0">
                  <button className="text-base text-gray-600 font-medium dark:text-white ">
                    About
                  </button>

                  <button className="text-base text-gray-600 font-medium dark:text-white ">
                    Work
                  </button>

                  <button className="text-base text-gray-600 font-medium dark:text-white ">
                    Testimonials
                  </button>

                  <button className="text-base text-gray-600 font-medium dark:text-white ">
                    Contact
                  </button>
                </div>
                <div className="w-[320px] h-[120px] flex flex-col items-center cursor-pointer p-[16px] gap-[16px]">
                  <div className="w-full h-fit flex justify-between items-center">
                    Switch Theme
                    <FiSun
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    />
                  </div>

                  <button className="md:w-32 md:h-9 md:border-solid md:border rounded-xl bg-gray-900 text-gray-50 text-base w-[288px] h-[36px] border border-solid  dark:bg-white dark:text-black">
                    Download CV
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <HeaderFooter></HeaderFooter>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Work></Work>
      </div>
    </div>
  );
}
