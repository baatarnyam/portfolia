import { useState } from "react";
const MenuClicked = ({ props }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const handleMenuClicked = () => {
    setIsMenuClicked((previousState) => !previousState);
  };
  return (
    isMenuClicked && (
      <div className="md:hidden">
        <div className="w-full h-fit flex flex-col">
          <div className="w-[320px] h-176 flex flex-col gap-4 p-4 border-solid border border-slate-500">
            <About>
              <button className="text-base text-gray-600 font-medium dark:text-white ">
                About
              </button>
            </About>
            <Work>
              <button className="text-base text-gray-600 font-medium dark:text-white ">
                Work
              </button>
            </Work>
            <Testimonials>
              <button className="text-base text-gray-600 font-medium dark:text-white ">
                Testimonials
              </button>
            </Testimonials>
            <Contact>
              <button className="text-base text-gray-600 font-medium dark:text-white ">
                Contact
              </button>
            </Contact>
          </div>
          <div className="w-full h-fit flex flex-col items-center cursor-pointer">
            <div className="w-full h-fit flex justify-between">
              Switch Theme
              <FiSun
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </div>
            <Download>
              <button className="w-32 h-9 border-solid border rounded-xl bg-gray-900 text-gray-50 text-base  dark:bg-white dark:text-black">
                Download CV
              </button>
            </Download>
          </div>
        </div>
        {props.children}
      </div>
    )
  );
};
export default MenuClicked;
