import Image from "next/image";
import Navbar from "../Navbar/Discover/Navbar";

const MainSidebar = () => {
  return (
    <aside className="h-screen overflow-y-auto w-64 bg-foreground shadow-lg py-5 px-7 rounded-br-2xl">
      <h2 className="text-primary text-center font-bold text-4xl mb-7">Yumy</h2>
      <div className="flex flex-col gap-5">
        <Navbar />
      </div>
    </aside>
  );
};

export default MainSidebar;
