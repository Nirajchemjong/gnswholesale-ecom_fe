import { useRef } from 'react';
import TestomonialCard from '../../ui/cards/TestomonialCard';
import ChevronIcons from '../assets/icons/ChevronIcons';
import TestomonialCardData from '../utils/data/TestomonialCardData';

const Testomonial = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (delta: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-col lg:flex-row p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8">
        <div className="testomonial w-full lg:w-[30%] flex-shrink-0">
            <div className="testomonial-content gap-4 flex flex-col">
                <div className="testomonial-content">
                <p className="text-lg sm:text-xl font-light text-primary-2">Customer Success Stories</p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary mt-2">
                    Trusted by <br />
                    <span className="text-primary text-xl sm:text-2xl lg:text-3xl font-semibold"> Leading Industries</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl font-list text-text-secondary mt-4">
                    See what our valued customers have to say about their experience with GNS Wholesale
                </p>
                </div>
                <div className="flex items-start justify-start gap-2 mt-6">
                    <button onClick={() => scrollByAmount(-320)} className="text-sm border-2 border-primary-2 rounded-full p-3 lg:p-4 font-light text-primary-2 hover:bg-primary-2 hover:text-white transition-colors">
                        <ChevronIcons.ChevronLeftIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                    <button onClick={() => scrollByAmount(320)} className="text-sm border-2 border-primary-2 rounded-full p-3 lg:p-4 font-light text-primary-2 hover:bg-primary-2 hover:text-white transition-colors">
                        <ChevronIcons.ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                </div>
            </div>
        </div>
        <div ref={scrollRef} className="flex items-center justify-start  lg:justify-center gap-4 overflow-x-auto scrollbar-hide pb-4 lg:pb-0 w-full">
            <div className="flex gap-4 p-4 min-w-max lg:min-w-0 lg:justify-start lg:w-full">
                {TestomonialCardData.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-80  sm:w-96 lg:w-[300px] xl:w-[320px] 2xl:w-[350px]">
                        <TestomonialCard 
                            rating={item.rating} 
                            review={item.review} 
                            name={item.name} 
                            position={item.position} 
                            company={item.company} 
                            image={item.image} 
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  ) 
}

export default Testomonial