import { useMemo, useState } from "react";

export type ProductData = {
  mainImage?: string;
  thumbnails: string[];
  name: string;
  description?: string;
  specification?: string;
};

const ProductCard = ({ productsData }: { productsData: ProductData }) => {
  const initialImage = useMemo<string>(
    () => productsData?.mainImage ?? productsData?.thumbnails?.[0] ?? "",
    [productsData]
  );
  const [selectedImage, setSelectedImage] = useState<string>(initialImage);
  const [selectedTab, setSelectedTab] = useState<string>("description");
  return (
    <section className='w-full flex flex-col gap-6 sm:gap-8'>
      <div className='products flex flex-col lg:flex-row gap-6 sm:gap-8 justify-between'>
        <div className='product-images flex flex-col-reverse lg:flex-row gap-4 w-full lg:w-1/2'>
          <div className='product-images_thumnails flex flex-row lg:flex-col gap-3 sm:gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[520px] scrollbar-thin'>
            {productsData.thumbnails.map((thumbnail: string, idx: number) => (
              <img
                key={String(thumbnail) + idx}
                src={thumbnail}
                alt='product-images'
                className={`object-contain rounded-2xl object-center cursor-pointer border w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-colors ${
                  selectedImage === thumbnail
                    ? "border-primary-2"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(thumbnail)}
              />
            ))}
          </div>
          <div className='product-images_main rounded-4xl overflow-hidden w-full'>
            <div className='w-full  aspect-square sm:aspect-[4/3] lg:aspect-[5/4] flex items-center justify-center rounded-4xl'>
            <img
              src={selectedImage}
              alt='product-images'
                className='w-full h-full object-contain object-center rounded-4xl'
            />
            </div>
          </div>
        </div>
        <div className='product-purchase w-full lg:flex-1'>
          <h1 className='text-xl sm:text-2xl font-base mb-4 sm:mb-8'>{productsData?.name}</h1>
          <div className='bg-white flex flex-col rounded-4xl p-4 gap-3 sm:gap-4 justify-center items-center'>
            <h2 className='text-xl '>Sign In to Buy</h2>
            <button className='bg-primary-2 text-white rounded-4xl px-4 py-2 w-full sm:w-auto self-center hover:bg-primary-2/80 transition-all duration-300 ease-in-out '>
              Sign In
            </button>
            <h2 className='text-xl '>Don't Have an Account?</h2>
            <button className='bg-primary-2 text-white rounded-4xl px-4 py-2 w-full sm:w-auto hover:bg-primary-2/80 transition-all duration-300 ease-in-out '>
              Apply For Trade Account
            </button>
          </div>
        </div>
      </div>
      <div className='product-details w-full lg:flex-1'>
        <div className='flex gap-4 border-b border-gray-200 overflow-x-auto'>
          <button
            className={`py-2 px-4 text-sm md:text-2xl font-medium ${
              selectedTab === "description"
                ? "text-primary-2 border-b-2 border-primary-2"
                : "text-text-secondary"
            }`}
            onClick={() => setSelectedTab("description")}
          >
            Description
          </button>
          <button
            className={`py-2 px-4 text-sm md:text-2xl font-medium ${
              selectedTab === "specification"
                ? "text-primary-2 border-b-2 border-primary-2"
                : "text-text-secondary"
            }`}
            onClick={() => setSelectedTab("specification")}
          >
            Specification
          </button>
        </div>

        <div className='mt-3 sm:mt-4'>
          {selectedTab === "description" && (
            <div className='product-des'>
              <p className='text-base text-text-secondary'>
                {productsData?.description}
              </p>
            </div>
          )}
          {selectedTab === "specification" && (
            <div className='product-specification'>
              <p className='text-base text-text-secondary'>
                {productsData?.specification}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
