const HomeContainer = ({ className, children }) => {
  return (
    <section
      className={
        "xl:mx-24 lg:mx-16 lg:my-40 sm:my-32 mx-5 my-28 " + className
      }
    >
      {children}
    </section>
  );
};

export default HomeContainer;
