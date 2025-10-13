import PremiumSelectionCard from "../../ui/cards/PremiumSelectionCard"
import PremiumSelectionCardData from "../utils/data/PremiumSelectionCard"
const PremiumSection = () => {
  return (
    
    <div className="w-full p-4 bg-white mt-10">
        <h1 className="text-2xl font-bold text-center"> <span className="text-primary">
      Premium</span> Selection <span className="bg-primary h-0.5 w-16 inline-block ml-2 justify-center align-middle "></span></h1>  
        <p className="text-center text-text-secondary ">Discover our most popular products, carefully curated for professional excellence
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none]">
            {PremiumSelectionCardData.map((item) => (
                <PremiumSelectionCard key={item.id} image={item.image} content={item.content} isBulkPricing={item.isBulkPricing} />
            ))}
        </div>

    </div>
  ) 
}

export default PremiumSection