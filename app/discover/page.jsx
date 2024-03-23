import MainSidebar from "../components/Discover/MainSidebar";
import Main from "../components/Discover/Main";

export const metadata = {
  title: "Discover",
  description: "Discover new recipes!",
};

const page = () => {
  return (
    <main className="flex items-start h-screen">
      <MainSidebar />
      <Main />
    </main>
  );
};

export default page;
