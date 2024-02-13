
const HomeContainer = ({className, children}) => {
  return (
    <section className={"lg:mx-16 mx-5 mr-7 my-28 lg:my-40 sm:my-32 " + className}>
      {children}
    </section>
  );
}

export default HomeContainer