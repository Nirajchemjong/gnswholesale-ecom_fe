const TopCategoriesCard = ({ title, image }: { title: string, image: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
    <div className="rounded-full shadow-md flex items-center justify-center overflow-hidden w-36 h-36">
        <img src={image} alt={title} className="object-cover w-full h-full rounded-full hover:scale-160 transition-all duration-300 ease-in-out" />
    </div>
    <p className="text-base mt-2 ">{title}</p>
    </div>
  )
}

export default TopCategoriesCard