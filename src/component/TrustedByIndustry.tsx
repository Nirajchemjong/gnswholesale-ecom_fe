import { companyLogos, staticLogos } from "../utils/data/TrustedIndustryData";
const TrustedByIndustry = () => {


  // Duplicate the array for seamless infinite scroll
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <div className="w-full p-4 bg-white mt-10">
      <h1 className="text-2xl font-bold text-center mb-2">
        <span className="text-primary">
          <span className="bg-primary h-0.5 w-16 inline-block ml-2 justify-center align-middle"></span>
          Trusted 
        </span> 
         &nbsp;By Industry
      </h1>  
      
      <p className="text-center text-text-secondary mb-8">
        Join Australia's most respected organizations who rely on GNS Wholesale for their office supply needs.
      </p>

      {/* Carousel Container */}
      <div className="relative overflow-hidden w-[80%] mx-auto">
        <div className="flex animate-scroll-right-to-left ">
          {duplicatedLogos.map((company, index) => (
            <div 
              key={`${company.id}-${index}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 w-auto object-contain hover:transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
            
          ))}
        </div>
      </div>

      {/* Static Images Section - No Animation */}
      <div className="mt-10">
        <div className="relative overflow-hidden w-[80%] mx-auto">
          <div className="flex justify-center items-center space-x-8">
            {staticLogos.map((company) => (
              <div 
                key={company.id}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-14 w-auto object-contain hover:transition-all duration-300 opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default TrustedByIndustry