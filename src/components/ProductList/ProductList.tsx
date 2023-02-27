import React from 'react';

import ProductWidget from '../ProductWidget';
import { Wrapper } from './ProductList.styles';

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

interface Props {
  products: Product[];
  onFav: (title: string) => void;
}

const ProductList: React.FC<Props> = ({ products, onFav }) => {
  const productsArr = products.map((product, i) => (
    <ProductWidget key={i} index={i} product={product} onFav={onFav}/>
  ));
  
  return <Wrapper>{productsArr.reverse()}</Wrapper>;
};


export default ProductList;