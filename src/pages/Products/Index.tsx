import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import PremiumSelectionCard from "../../../ui/cards/PremiumSelectionCard";
import ChevronIcons from "../../assets/icons/ChevronIcons";
import ProductHero from "../../component/products/ProductHero";
import PremiumSelectionCardData from "../../utils/data/PremiumSelectionCardData";
import ProductsData from "../../utils/data/ProductsData";
import LayoutShiffter from "../layout/layoutShiffter";

const Index = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };
  return (
    <>
      <LayoutShiffter>
        <section className='w-full bg-bg-primary'>
          <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
            <h4
              aria-label='products/product-details'
              className='text-sm sm:text-base font-light mb-4 sm:mb-6'
            >
              <Link
                to='/'
                className='text-primary-2 text-medium uppercase hover:underline'
              >
                Home /
              </Link>{" "}
              <span className='hidden sm:inline'>
                Writing Drawing Sketching Pencils Set
              </span>
              <span className='sm:hidden'>Pencils Set</span>
            </h4>

            <ProductHero productsData={ProductsData} />

            {/* offer images */}
            <div className='offer-images w-full flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-10'>
              <div className='w-full sm:w-1/2'>
                <img
                  src='/src/assets/images/products/offer1.png'
                  alt='Special offer 1'
                  className='w-full h-48 sm:h-56 md:h-64 lg:h-72 object-fit object-center rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-sm hover:shadow-md transition-shadow duration-300'
                />
              </div>
              <div className='w-full sm:w-1/2'>
                <img
                  src='/src/assets/images/products/offer2.png'
                  alt='Special offer 2'
                  className='w-full h-48 sm:h-56 md:h-64 lg:h-72 object-fit object-center rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-sm hover:shadow-md transition-shadow duration-300'
                />
              </div>
            </div>
            {/* offer images end */}

            {/* Products you may like */}
            <div className='mt-8'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-center'>
                  {" "}
                  Product you may like{" "}
                  <span className='bg-primary h-0.5 w-16 inline-block ml-2 align-middle '></span>
                </h1>
                <p className='mt-2 text-center text-sm sm:text-base text-text-secondary '>
                  Discover our most popular products, carefully curated for
                  professional excellence
                </p>
              </div>
              {/* product card fetching from the data*/}

              <div className='relative sm:mx-0'>
                <button
                  type='button'
                  aria-label='Scroll left'
                  onClick={() => scrollByAmount("left")}
                  className='hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center h-10 w-10 rounded-full bg-white/80 shadow hover:bg-white transition'
                >
                  <ChevronIcons.ChevronLeftIcon className='h-5 w-5' />
                </button>

                <div
                  ref={scrollerRef}
                  className='flex gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 py-6 sm:py-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide'
                >
                  {PremiumSelectionCardData.map((item) => (
                    <div
                      key={item.id}
                      className='snap-center min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] xl:min-w-[22%]'
                    >
                      <PremiumSelectionCard
                        image={item.image}
                        content={item.content}
                        isBulkPricing={item.isBulkPricing}
                      />
                    </div>
                  ))}
                </div>

                <button
                  type='button'
                  aria-label='Scroll right'
                  onClick={() => scrollByAmount("right")}
                  className='hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center h-10 w-10 rounded-full bg-white/80 shadow hover:bg-white transition'
                >
                  <ChevronIcons.ChevronRightIcon className='h-5 w-5' />
                </button>
              </div>
            </div>
          </div>
          {/* Products you may like end */}
        </section>
      </LayoutShiffter>
    </>
  );
};

export default Index;
