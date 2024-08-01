import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default layout;
