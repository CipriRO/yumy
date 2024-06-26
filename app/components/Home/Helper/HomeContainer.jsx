const HomeContainer = ({ className, children }) => {
  return (
    <section
      className={
        "xl:mx-20 lg:mx-16 first:!mt-16 lg:my-28 sm:my-32 mx-5 my-28 " +
        className
      }
    >
      {children}
    </section>
  );
};

export default HomeContainer;
