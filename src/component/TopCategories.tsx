import TopCategoriesCard from "../../ui/cards/TopCategoriesCard";
import CategoryData from "../utils/data/CategoryData";
import TopCategoriesCardData from "../utils/data/TopCategoriesCardData";
import CategoryCard from "./CategoryCard";
const TopCategories = () => {
  return (
    <div className="w-full p-4 bg-white mt-10">
        <h1 className="text-2xl font-bold text-center"> <span className="text-primary">
      Top</span> Categories <span className="bg-primary h-0.5 w-16 inline-block ml-2 justify-center align-middle "></span></h1>  
        <p className="text-center text-text-secondary ">Comprehensive range of premium office supplies across all major categories</p>

        <div className="relative w-[90%] mx-auto justify-center align-center mt-10 overflow-hidden scroll-container">
            <div className="flex gap-4 animate-[scroll_20s_linear_infinite] whitespace-nowrap scroll-content">
                {TopCategoriesCardData.map((item) => (
                    <TopCategoriesCard key={item.id} title={item.title} image={item.image} />
                ))}
            </div>
        {
              <div className="flex gap-4 mt-10">
            {CategoryData.map((item) => (
                <CategoryCard key={item.id} heading={item.heading} subheading={item.subheading} image={item.image} items={item.items} />
            ))}
            </div>
      }
        </div>
    </div>
  )
}

export default TopCategories