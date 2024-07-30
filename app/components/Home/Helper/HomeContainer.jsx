const HomeContainer = ({ className, children }) => {
  return (
    <section
      className={
        "mx-5 my-28 first:!mt-16 sm:my-32 lg:mx-16 lg:my-28 xl:mx-20 " +
        className
      }
    >
      {children}
    </section>
  );
};

export default HomeContainer;
