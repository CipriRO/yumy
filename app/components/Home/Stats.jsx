import HomeContainer from "./Helper/HomeContainer";

const Stats = () => {
  return (
    <HomeContainer className="flex flex-col flex-wrap sm:flex-row justify-center lg:!my-36 items-center rounded-3xl lg:gap-32 gap-10">
      <div>
        <h2 className="lg:text-6xl text-5xl text-primary font-black text-center">
          30M+
        </h2>
        <p className="text-primary-dark font-medium text-center">
          Food Enthusiasts
        </p>
      </div>
      <div>
        <h2 className="lg:text-6xl text-5xl text-primary font-black text-center">
          90M+
        </h2>
        <p className="text-primary-dark font-medium text-center">Recipes</p>
      </div>
      <div>
        <h2 className="lg:text-6xl text-5xl text-primary font-black text-center">
          800K+
        </h2>
        <p className="text-primary-dark font-medium text-center">
          Culinary Experts and Chefs
        </p>
      </div>
    </HomeContainer>
  );
};

export default Stats;
