import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProductList from '../ProductList';

describe('ProductList', () => {
  const products = [
    { id: 1, title: 'Product 1', price: 10.99, description: 'Description 1' },
    { id: 2, title: 'Product 2', price: 20.99, description: 'Description 2' },
    { id: 3, title: 'Product 3', price: 30.99, description: 'Description 3' },
  ];

  test('renders the correct number of products', () => {
    render(<ProductList products={products} onFav={() => {}} />);
    const productWidgets = screen.getAllByTestId('product-widget');
    expect(productWidgets).toHaveLength(products.length);
  });

  test('renders products in reverse order', () => {
    render(<ProductList products={products} onFav={() => {}} />);
    const productWidgets = screen.getAllByTestId('product-widget');
    const lastProductWidget = productWidgets[productWidgets.length - 1];
    expect(lastProductWidget).toHaveTextContent(products[0].title);
  });

  test('calls onFav when the favorite button is clicked', () => {
    const onFavMock = jest.fn();
    render(<ProductList products={products} onFav={onFavMock} />);
    const favButtons = screen.getAllByTestId('product-fav-button');
    const lastFavButton = favButtons[favButtons.length - 1];
    userEvent.click(lastFavButton);
    expect(onFavMock).toHaveBeenCalledWith(products[0].title);
  });
});
