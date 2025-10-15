
import sponsorNetworkImage from '../assets/images/sponsorNetwork.png'

const SponserNetwork = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div className="w-full text-white min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] p-4 sm:p-6 lg:p-8 bg-primary-2 mt-6 sm:mt-8 lg:mt-10 rounded-xl sm:rounded-2xl lg:rounded-3xl flex flex-col items-center justify-center text-center" style={{backgroundImage: `url(${sponsorNetworkImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 max-w-4xl">Join Australia's Premier B2B Network</h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 max-w-3xl leading-relaxed px-2 sm:px-4">
        Unlock exclusive wholesale pricing, flexible payment terms, and priority support. Experience the difference that 40 years of expertise makes.
      </p>
      <button className="bg-white text-black rounded-full py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 text-sm sm:text-base lg:text-lg font-semibold hover:bg-gray-200 transition-colors duration-200 shadow-lg" onClick={() => {}}>
        Join Now
      </button>
      </div>
    </div>
  )
}

export default SponserNetwork