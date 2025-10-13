import Button from "../../ui/button/Button";
const CategoryCard = ({ heading, subheading, image, items }: { heading: string, subheading: string, image: string, items: string }) => {
  return (
    <div 
        className="w-full  gap-2 p-8 rounded-lg bg-cover bg-center bg-no-repeat flex flex-col justify-end md:h-80"
        style={{
            backgroundImage: `url(${image})`
        }}
    >
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-sm text-gray-500">{subheading}</p>
        <div className="self-start">
            <Button name={items} onClick={() => {}} />
        </div>
    </div>
  )
}

export default CategoryCard