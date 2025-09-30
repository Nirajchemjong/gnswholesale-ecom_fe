


import FeaturesCard from "../../ui/cards/FeaturesCard"
import FeaturesIcons from "../assets/icons/FeaturesIcons"
import LayoutShiffter from "./layout/layoutShiffter"

const FeaturesCardTest = [{
    img: { node: <FeaturesIcons.PremiumIcon />, alt: "premium icon" },
    title: "Premium Quality",
    des: "Curated selection of the finest office supplies from trusted brands",
}, {
    img: { node: <FeaturesIcons.SwiftDeliveryIcon /> , alt: "swift delivery icon" },
    title: "Swift Delivery",
    des: "Same-day dispatch with Australia-wide express delivery options",
}, {
    img: {node: <FeaturesIcons.BulkExcellenceIcon /> , alt: "bulk excellence icon" },
    title: "Bulk Excellence",
    des: "Competitive wholesale pricing with flexible volume discounts",

}, {
    img: { node:< FeaturesIcons.ExportSupportIcon/> , alt: "export support icon" },
    title: "Export Support",
    des: "Dedicated account managers for personalized business solutions"
}
]

const Home = () => {
    return (
        <LayoutShiffter>
            <div className="px-4">
                <section className="h-40 w-full crasoul bg-gray-500"></section>
                <section className="w-full features bg-bg-primary flex mx-auto items-center justify-center">
                    {
                        FeaturesCardTest.map((items, index) => {
                            return <FeaturesCard key={items.title + index} img={items?.img} title={items.title} des={items.des} onClick={() => (alert("FeaturesCard is Clicked"))} />
                        })
                    }
                </section>
                <section className="h-40 w-full category-section bg-gray-200"></section>
                <section className="h-40 w-full client-logo bg-amber-200"></section>
                <section className="h-40 w-full premium-section bg-amber-500"></section>
                <section className="h-40 w-full Promo-Image bg-amber-800"></section>
                <section className="h-40 w-full Testomonial bg-green-400"></section>
                <section className="h-40 w-full Register-frame bg-text-secondary"></section>
            </div>
        </LayoutShiffter>)
}

export default Home