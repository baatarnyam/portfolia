import { Children } from "react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";

const Menu = (props) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const handleMenuClicked = () => {
    setIsMenuClicked((previousState) => !previousState);
  };
  return (
    <div>
      <button onClick={handleMenuClicked}>
        {isMenuClicked ? (
          <IoCloseCircleOutline />
        ) : (
          <FiMenu className="flex md:hidden" />
        )}
      </button>
      <div>
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
      {Children}
    </div>
  );
};
export default Menu;
