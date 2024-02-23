import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center sticky top-1 left-2 right-2 my-1 mx-2 py-1 px-2 lg:top-2 lg:left-4 lg:right-4 lg:my-2 lg:mx-4 lg:py-2 lg:px-4 backdrop-blur-md rounded-full shadow z-50">
      <h3 className="text-primary lg:text-4xl text-3xl font-bold">Yumy</h3>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
