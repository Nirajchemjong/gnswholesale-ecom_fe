import Button from "../../ui/button/Button";
const CategoryCard = ({ heading, subheading, image, items }: { heading: string, subheading: string, image: string, items: string }) => {
  return (
    <div 
        className="w-full h-80  gap-2 bg-white p-8 rounded-lg bg-cover bg-center bg-no-repeat flex flex-col justify-end"
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