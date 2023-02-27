import React, { Component } from 'react';

import {
  img1,
  img2,
  logo,
} from '../../assets/images';
import AddProductForm from '../../components/AddProductForm';
import {
  Button,
  Modal,
} from '../../components/generic';
import ProductList from '../../components/ProductList';
import {
  addProduct,
  getProducts,
} from '../../services/api';
import Product from '../../types/Product';
import {
  ButtonWrapper,
  Header,
  HeaderImage,
  HeaderImageWrapper,
  MainBody,
  MainImage,
  MainImages,
  MessageContainer,
  StatsContainer,
} from './ShopApp.styles';

interface ShopAppProp {
  products: Product[];
  isOpen: boolean;
  isShowingMessage: boolean;
  message: string;
  numFavorites: number;
  prodCount: number;
}

export class ShopApp extends Component<{}, ShopAppProp> {
  constructor(props: {}) {
    super(props);
    this.state = { products: [], isOpen: false, isShowingMessage: false, message: '', numFavorites: 0, prodCount: 0 };
  }

  componentDidMount(){
    document.title = "Droppe refactor app"
    this.fetchProducts();
  }

  async fetchProducts(){
    try {
      const data = await getProducts();

      this.setState({
        products: data,
        prodCount: data.length,
      });
    } catch (error) {
      console.error(error);
    }
  };

  favClick = (title: string) => {
    const { products } = this.state;
    const idx = products.findIndex((prod) => prod.title === title);

    const updatedProducts = [...products];
    let { numFavorites } = this.state;

    if (updatedProducts[idx].isFavorite) {
      updatedProducts[idx].isFavorite = false;
      numFavorites--;
    } else {
      updatedProducts[idx].isFavorite = true;
      numFavorites++;
    }

    this.setState({ products: updatedProducts, numFavorites });
  };

  onSubmit = async(payload: Product) => {
    const { products } = this.state;
    const updatedProducts = [...products];

    updatedProducts.push({
      title: payload.title,
      description: payload.description,
      price: payload.price,
    });

    this.setState({
      isOpen: false,
      isShowingMessage: true,
      message: 'Adding product...',
    });

    try {
      await addProduct(payload);
      setTimeout(() => {
        this.setState({
          products: updatedProducts,
          prodCount: products.length + 1,
          isShowingMessage: false,
          message: '',
        });
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { products, isOpen, isShowingMessage, message, numFavorites, prodCount } = this.state;
    return (
      <React.Fragment>
        <Header>
          <HeaderImageWrapper className={'container'}>
            <HeaderImage src={logo} alt="Droppe logo"/>
          </HeaderImageWrapper>
        </Header>

        <>
          <MainImages className={'container'}>
            <MainImage src={img1} />
            <MainImage src={img2} />
          </MainImages>
        </>

        <MainBody className={'container'}>
          <ButtonWrapper >
            <Button
                onClick={() => {
                    this.setState({
                      isOpen: true,
                    });
                  }
                }
            >
              Send product proposal
            </Button>
            {isShowingMessage && 
              <MessageContainer> <i>{message}</i> </MessageContainer>
            }
          </ButtonWrapper>

          <StatsContainer>
            <span>Total products: {prodCount}</span>
            {' - '}
            <span>Number of favorites: {numFavorites}</span>
          </StatsContainer>

          {products && !!products.length ? <ProductList products = {products} onFav = {this.favClick} /> : <div></div>}
        </MainBody>

        <Modal isOpen = {isOpen} onClose = { () => { this.setState({ isOpen: false }) } } >
          <AddProductForm onSubmit={this.onSubmit}/>
        </Modal>

      </React.Fragment>
    );
  }
}
