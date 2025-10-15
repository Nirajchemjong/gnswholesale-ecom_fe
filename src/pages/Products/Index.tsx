import { Link } from "@tanstack/react-router"
import ProductHero from "../../component/products/ProductHero"
import ProductsData from "../../utils/data/ProductsData"
import LayoutShiffter from "../layout/layoutShiffter"
const Index = () => {
  return (
    <>    
      <LayoutShiffter>
        <section className="w-full bg-bg-primary">
        <div className="mx-auto  max-w-9/12 p-4 sm:px-4 lg:px-6">
          <h4 aria-label="products/product-details" className="text-base font-light">
            <Link to="/" className="text-primary-2 text-medium uppercase hover:underline">Home /</Link>  Writing Drawing Sketching Pencils Set
          </h4>

          <ProductHero productsData={ProductsData} />
        </div>
        </section>
      </LayoutShiffter>
  </>
  )
}

export default Index