import { useRef } from "react"
import Button from "../../ui/button/Button"
import PremiumSelectionCard from "../../ui/cards/PremiumSelectionCard"
import ChevronIcons from "../assets/icons/ChevronIcons"
import PremiumSelectionCardData from "../utils/data/PremiumSelectionCardData"
const PremiumSection = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current
    if (!el) return
    const amount = el.clientWidth * 0.9
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <div className="w-full p-4 bg-white mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center"> <span className="text-primary">
      Premium</span> Selection <span className="bg-primary h-0.5 w-16 inline-block ml-2 align-middle "></span></h1>  
          <p className="mt-2 text-center text-sm sm:text-base text-text-secondary ">Discover our most popular products, carefully curated for professional excellence
          </p>
        </div>

        <div className="relative mt-10 -mx-4 sm:mx-0">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByAmount("left")}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center h-10 w-10 rounded-full bg-white/80 shadow hover:bg-white transition"
          >
            <ChevronIcons.ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 py-6 sm:py-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {PremiumSelectionCardData.map((item) => (
              <div key={item.id} className="snap-center min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] xl:min-w-[22%]">
                <PremiumSelectionCard image={item.image} content={item.content} isBulkPricing={item.isBulkPricing} />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByAmount("right")}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center h-10 w-10 rounded-full bg-white/80 shadow hover:bg-white transition"
          >
            <ChevronIcons.ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-center mt-10">
            <Button  name="View All" onClick={() => {}} />   
        </div>

    </div>
  ) 
}

export default PremiumSection