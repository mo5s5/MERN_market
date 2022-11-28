import React from 'react'
import ProductCard from '../../components/cards/ProductCard';
import CategorySmall from '../../components/category/CategorySmall';
import './productPage.scss';

export default function ProductsPage(props) {
  const { categories, products, onAddToCart, onChooseCategory } = props;
  console.log(products);
  return (
    <div className='productPage'>
      <div className='categorySmall-container'>
        <CategorySmall
          categories={categories}
          onChooseCategory={onChooseCategory}
        ></CategorySmall>
      </div>

      <div className='productList'>
        {products.map((product) => (
          <ProductCard
            onAddToCart={onAddToCart}
            key={product.id}
            product={product}
          ></ProductCard>
        ))}
      </div>

    </div>
  )
}