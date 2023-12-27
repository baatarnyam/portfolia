import About from "@/components/About";
import Work from "@/components/work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/contact";
import Download from "@/components/Download";
import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function home() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const handleMenuClicked = () => {
    setIsMenuClicked((previousState) => !previousState);
  };
  return (
    <div className="w-full h-full flex flex-col items-center p-10">
      <div className="w-[375px] md:w-[1440px] md:h-[68px] border-solid border md:flex md:items-center md:justify-center flex flex-col items-start px-2.5 gap-5">
        <div className="w-[375px] md:w-[1280px] h-[36px] flex items-center justify-between border-solid border px-8">
          <div>{"<SS/>"}</div>
          <div className="md:w-[554px] md:h-full md:flex">
            <div className="hidden md:flex md:gap-6 md:items-center">
              <About>
                <button className="text-base text-gray-600 font-medium">
                  About
                </button>
              </About>
              <Work>
                <button className="text-base text-gray-600 font-medium">
                  Work
                </button>
              </Work>
              <Testimonials>
                <button className="text-base text-gray-600 font-medium">
                  Testimonials
                </button>
              </Testimonials>
              <Contact>
                <button className="text-base text-gray-600 font-medium">
                  Contact
                </button>
              </Contact>
              <div className="w-[188px] h-full flex gap-4 items-center cursor-pointer">
                <FiSun />
                <Download>
                  <button className="w-32 h-9 border-solid border rounded-xl bg-gray-900 text-gray-50 text-base">
                    Download CV
                  </button>
                </Download>
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
          <div className="md:hidden">
            <div className="w-full h-fit flex flex-col">
              <div className="w-[320px] h-176 flex flex-col gap-4 p-4 border-solid border border-slate-500">
                <About>
                  <button className="text-base text-gray-600 font-medium">
                    About
                  </button>
                </About>
                <Work>
                  <button className="text-base text-gray-600 font-medium">
                    Work
                  </button>
                </Work>
                <Testimonials>
                  <button className="text-base text-gray-600 font-medium">
                    Testimonials
                  </button>
                </Testimonials>
                <Contact>
                  <button className="text-base text-gray-600 font-medium">
                    Contact
                  </button>
                </Contact>
              </div>
              <div className="w-full h-fit flex flex-col items-center cursor-pointer">
                <div className="w-full h-fit flex justify-between">
                  Switch Theme
                  <FiSun />
                </div>
                <Download>
                  <button className="w-32 h-9 border-solid border rounded-xl bg-gray-900 text-gray-50 text-base">
                    Download CV
                  </button>
                </Download>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
