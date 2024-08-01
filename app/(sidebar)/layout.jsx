import Sidebar from "../components/Discover/Sidebar";
import Providers from "../components/Sidebar/Providers";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex items-start">
        <Providers>
          <Sidebar />
          {children}
        </Providers>
      </div>
    </>
  );
};
export default layout;
