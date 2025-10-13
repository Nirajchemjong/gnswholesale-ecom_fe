const PremiumSelectionCard = ({ image, content, isBulkPricing }: { image: string, content: string, isBulkPricing: boolean }) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 p-4 shadow-md">
        
        <div className="relative aspect-[4/3] w-full">
            <img src={image} alt="Premium Selection" className="absolute inset-0 w-full h-full object-cover rounded-lg"/>
            {isBulkPricing && (
                <div className="absolute bottom-2 left-2">
                    <h3 className="text-medium leading-normal bg-[#FFB200] rounded-lg p-2">Bulk Pricing Available</h3>
                </div>
            )}
        </div>
    <div className="content-container flex flex-col gap-2">
        <h5 className="text-medium font-light line-clamp-2">{content}</h5>
     <button className="text-sm border-2 border-gray-200 rounded-full p-2">View Details</button>
    </div>
    </div>
  )
}

export default PremiumSelectionCard