import { MdOutlineWbSunny, MdOutlineMenu, MdClose } from "react-icons/md";
import { useState } from "react";

export const Menu = ({ children }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const routes = ["About", "Work", "Testimonials", "Contact"];

  const handleMenuClick = () => {
    setIsMenuClicked((previousState) => !previousState);
  };

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="px-20 py-4 flex justify-between">
        <h2>{"<SS />"}</h2>
        <div className="hidden md:flex-center divide-x-2">
          <div className="flex-center gap-6">
            {routes.map((routes, index) => (
              <p key={index}>{routes}</p>
            ))}
          </div>
          <div className="flex-center">
            <MdOutlineWbSunny />
            <button className="rounded-xl bg-black text-white px-4 py-1.5">
              Download CV
            </button>
          </div>
        </div>
        <button onClick={handleMenuClick}>
          {isMenuClicked ? (
            <MdClose />
          ) : (
            <MdOutlineMenu size={24} className="block md:hidden" />
          )}
        </button>
      </div>
      {isMenuClicked && <div className="bg-white w-full h-full">menu</div>}
      {children}
    </div>
  );
};
