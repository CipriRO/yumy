import MainSidebar from "../components/Discover/MainSidebar";
import SideBarProvider from "../components/Navbar/Discover/SideBarProvider";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex items-start">
        <SideBarProvider>
          <MainSidebar />
          {children}
        </SideBarProvider>
      </div>
    </>
  );
};
export default layout;
