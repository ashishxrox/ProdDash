import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from './ProductCard';
import '../../static/slider.css'
import ProductContext from '../../Context/Product/ProductContext';

const ProductBody = ({ sortOption, filterOption }) => {
    const context = useContext(ProductContext)
    const { products } = context
    const data = {
        "products": products
    };

    const productsArray = Object.values(data.products);

    let filteredProductsArray = productsArray;

    if (filterOption !== null) {
        const [priceRange, popularityRange] = filterOption;
        filteredProductsArray = productsArray.filter((product) => {
          let priceInRange = true;
          let popularityInRange = true;
      
          if (priceRange) {
            const [minPrice, maxPrice] = priceRange.split('-').map(Number);
            if (minPrice && product.price < minPrice) priceInRange = false;
            if (maxPrice && product.price > maxPrice) priceInRange = false;
          }
      
          if (popularityRange) {
            const [minPopularity, maxPopularity] = popularityRange.split('-').map(Number);
            if (minPopularity && product.popularity < minPopularity) popularityInRange = false;
            if (maxPopularity && product.popularity > maxPopularity) popularityInRange = false;
          }
      
          return priceInRange && popularityInRange;
        });
      }

    let sortedProductsArray = filteredProductsArray;

    if (sortOption !== null) {
        switch (sortOption) {
            case 'priceAsc':
                sortedProductsArray = filteredProductsArray.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                sortedProductsArray = filteredProductsArray.sort((a, b) => b.price - a.price);
                break;
            case 'popularityAsc':
                sortedProductsArray = filteredProductsArray.sort((a, b) => a.popularity - b.popularity);
                break;
            case 'popularityDesc':
                sortedProductsArray = filteredProductsArray.sort((a, b) => b.popularity - a.popularity);
                break;
            // Add more sorting options as needed
            default:
                break;
        }
    }

    // Group products into arrays of 6
    const groupedProducts = [];
    for (let i = 0; i < sortedProductsArray.length; i += 6) {
        groupedProducts.push(sortedProductsArray.slice(i, i + 6));
    }

    if (sortedProductsArray.length === 0) {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{ height: "100%", width: "100%" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        );
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100%", width: "100%" }}>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={8000}
                showIndicators={false}
            >
                {groupedProducts.map((group, index) => (
                    <div key={index} className="product-grid">
                        {group.map((product, idx) => (
                            <ProductCard
                                key={idx}
                                title={product.title}
                                price={product.price}
                                popularity={product.popularity}
                                subcategory={product.subcategory}
                            />
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ProductBody;