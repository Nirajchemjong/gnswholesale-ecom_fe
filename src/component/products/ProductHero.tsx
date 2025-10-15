import ProductCard, { type ProductData } from "../../../ui/cards/products/ProductCard"

const ProductHero = ({ productsData }: { productsData: ProductData }) => {
  return (
    <div>
        <ProductCard productsData={productsData} />

        
    </div>
  )
}

export default ProductHero