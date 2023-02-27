import React from 'react';

import { FaStar } from 'react-icons/fa';

import {
  ActionBar,
  ActionBarItem,
  ActionBarItemLabel,
  ProductBody,
  ProductContainer,
  ProductTitle,
} from './ProductWidget.styles';

interface Product { 
    title: string; 
    description: string; 
    price: number; 
    isFavorite: boolean; 
    rating: {
      rate: number; 
      count: number
    }
}

interface ProductProps {
    index: number;
    product: Product;
    onFav: (title: string) => void;
}

const ProductWidget: React.FC<ProductProps> = ({ index, product, onFav }) => {
  return (
    <ProductContainer>
      <ProductTitle>{product.title}</ProductTitle>

      {product.rating && (
        <p><strong>Rating: {product.rating.rate}/5</strong></p>
      )}

      <p><strong>Price: ${product.price.toFixed(2)}</strong></p>

      <ProductBody>
        <span><strong>Description:</strong></span><br/>
        {product.description}
      </ProductBody>

      <ActionBar>
        <ActionBarItem
          className={'container'}
          active = {product.isFavorite}
          role = "button"
          onClick = {() => { onFav(product.title) }}
        >
          <FaStar />
          <ActionBarItemLabel>
            {product.isFavorite ? "Remove from favorites" : "Add to favorites"}
          </ActionBarItemLabel>
         </ActionBarItem>
      </ActionBar>
    </ProductContainer>
  );
};

export default ProductWidget;
