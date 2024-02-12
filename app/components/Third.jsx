import HomeContainer from "./HomeContainer";

const Third = () => {
  return (
    <HomeContainer className="flex items-center">
      <div>
        <h2 className="mb-3 font-bold text-3xl">Your Recipes, Your Platform</h2>

        <p className="text-text-700 md:w-10/12">
          Showcase your culinary skills by sharing your favorite recipes on
          Yumy. Let others savor your creations while you gain recognition as a
          talented home chef. With just a few clicks, you can upload your
          recipes and inspire others to get creative in their own kitchens.
        </p>
      </div>
    </HomeContainer>
  );
};

export default Third;
