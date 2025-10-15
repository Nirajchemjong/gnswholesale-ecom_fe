import ProductCard from "../../../ui/cards/products/ProductCard"

const ProductHero = ({ productsData }: { productsData: any }) => {
  return (
    <div>
        <ProductCard productsData={productsData} />
    </div>
  )
}

export default ProductHero