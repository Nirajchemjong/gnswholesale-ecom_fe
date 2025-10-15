


import FeaturesCard from "../../ui/cards/FeaturesCard"
import FeaturesIcons from "../assets/icons/FeaturesIcons"
import Carousel from "../component/Carousel"
import PremiumSection from "../component/PremiumSection"
import PromoImage from "../component/PromoImage"
import SponserNetwork from "../component/SponserNetwork"
import Testomonial from "../component/Testomonial"
import TopCategories from "../component/TopCategories"
import TrustedByIndustry from "../component/TrustedByIndustry"
import LayoutShiffter from "./layout/layoutShiffter"

const FeaturesCardTest = [{
    img: { node: <FeaturesIcons.PremiumIcon />, alt: "premium icon" },
    title: "Premium Quality",
    des: "Curated selection of the finest office supplies from trusted brands",
}, {
    img: { node: <FeaturesIcons.SwiftDeliveryIcon />, alt: "swift delivery icon" },
    title: "Swift Delivery",
    des: "Same-day dispatch with Australia-wide express delivery options",
}, {
    img: { node: <FeaturesIcons.BulkExcellenceIcon />, alt: "bulk excellence icon" },
    title: "Bulk Excellence",
    des: "Competitive wholesale pricing with flexible volume discounts",

}, {
    img: { node: < FeaturesIcons.ExportSupportIcon />, alt: "export support icon" },
    title: "Export Support",
    des: "Dedicated account managers for personalized business solutions"
}
]

const Home = () => {
    return (
        <LayoutShiffter>
            <div className="">
                <section className="w-full bg-white">
                <Carousel />    
                </section>
                <section className="w-full p-4 features bg-bg-primary flex flex-col md:flex-row mx-auto items-center justify-center ">
                    {
                        FeaturesCardTest.map((items, index) => {
                            return <FeaturesCard key={items.title + index} img={items?.img} title={items.title} des={items.des} onClick={() => (alert("FeaturesCard is Clicked"))} />
                        })
                    }
                </section>
                <section className=" w-full category-section ">
                    <TopCategories />
                </section>
                <section className="w-full client-logo ">
                    <TrustedByIndustry />
                </section>
                <section className="w-full"><PremiumSection /></section>
                <section className="w-full Promo-Imag"><PromoImage /></section>
                <section className="w-full Testomonial"><Testomonial /></section>
                <section className="w-full h-full"><SponserNetwork /></section>
            </div>
        </LayoutShiffter>)
}

export default Home