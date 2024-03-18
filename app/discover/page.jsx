import FiltersSidebar from "../components/Discover/FiltersSidebar"
import Main from "../components/Discover/Main"

export const metadata = {
  title: "Discover",
  description: "Discover new recipes!"
}

const page = () => {
  return (
    <main className="flex">
      <FiltersSidebar />
      <Main />
    </main>
  )
}

export default page