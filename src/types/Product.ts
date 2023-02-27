interface Product {
    id?: number;
    title: string;
    description: string;
    price: number;
    isFavorite?: boolean;
    rating?: {
      rate: number;
      count: number;
    }
}

export default Product;