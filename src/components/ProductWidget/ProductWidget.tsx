import React from 'react';

import { FaStar } from 'react-icons/fa';

import Product from '../../types/Product';
import {
  ActionBar,
  ActionBarItem,
  ActionBarItemLabel,
  ProductBody,
  ProductContainer,
  ProductTitle,
} from './ProductWidget.styles';

interface ProductProps {
  index: number;
  product: Product;
  onFav: (title: string) => void;
}

const ProductWidget: React.FC<ProductProps> = ({ index, product, onFav }) => {
  return (
    <ProductContainer data-testid="product-widget">
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
          data-testid="product-fav-button"
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
