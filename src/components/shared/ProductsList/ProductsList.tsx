import React from 'react';
import './ProductsList.scss';
import type { Product } from '../../../types/Product';
import { ProductCard } from '../ProductCard';

type Props = {
  products: Product[];
};

export const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <div className="products-list">
      {products.map(product => (
        <div className="products-list__item" key={product.itemId}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
