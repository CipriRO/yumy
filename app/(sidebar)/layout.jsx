import MainSidebar from "../components/Discover/MainSidebar";
import Providers from "../components/Navbar/Discover/Providers";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex items-start">
        <Providers>
          <MainSidebar />
          {children}
        </Providers>
      </div>
    </>
  );
};
export default layout;
