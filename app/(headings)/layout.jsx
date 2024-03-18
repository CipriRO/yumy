import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Home/Navbar";

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
