const TestomonialCard = (  { rating, review, name, position, company, image }: { rating: number, review: string, name: string, position: string, company: string, image: string }) => {

  return (
    <div className="testomonial-card z-10 p-4 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md mx-auto flex-shrink-0">
      <div className="star-rating mb-3 sm:mb-4">
        {rating && [1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${
              star <= rating ? 'star-filled' : 'star-empty'
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </span>
        ))}
        

      </div>
      <p className="text-sm sm:text-base lg:text-lg font-light text-text-secondary mb-4 sm:mb-6 leading-relaxed">
        "{review}"
      </p> 
      <div className="divider w-full h-0.5 mt-4 sm:mt-6 bg-gray-200"></div>
      <div className="flex items-center justify-start gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6">
        <img src={image} alt="avatar" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex-shrink-0" />
        <div className="flex flex-col items-start justify-start min-w-0 flex-1">
          <p className="text-sm sm:text-base lg:text-lg font-semibold truncate w-full">
            {name}
          </p>
          <p className="text-xs sm:text-sm lg:text-base font-light text-text-secondary truncate w-full">{position}</p>
          <p className="text-xs sm:text-sm lg:text-base font-bold truncate w-full">{company}</p>
        </div>
      </div>

      
    </div>
  )
}

export default TestomonialCard