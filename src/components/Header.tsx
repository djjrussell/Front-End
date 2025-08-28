import { PiRocket } from "react-icons/pi";

const Header = () => {
  return (
    <header className="flex items-center justify-center mb-16 mt-8 bg-transparent">
      <div className="flex items-center">
        <span className="text-blue-500 mr-2 text-xl z-30">
          <PiRocket className="h-10 w-8 text-blueText" />
        </span>
        <h1 className="z-30 text-5xl font-black">
          <span className="text-blue-500">Todo</span>
          <span className="text-purple-500">App</span>
        </h1>
      </div>
      <div className="backsplash absolute left-0 top-0 right-0 bg-[#0D0D0D] z-0 w-[8000px] h-[200px] overflow-hidden" />
    </header>
  );
};

export default Header;
