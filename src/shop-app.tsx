import React, { Component } from 'react';

import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

import {
  img1,
  img2,
  logo,
} from './assets/images';
import AddProductForm from './components/AddProductForm/AddProductForm';
import Button from './components/generic/Button';
import ProductList from './components/ProductList/ProductList';
import {
  addProduct,
  getProducts,
} from './services/api';
import styles from './shopApp.module.css';
import Product from './types/Product';

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
    const { products, isOpen } = this.state;
    return (
      <React.Fragment>
        <div className={styles.header}>
          <div className={['container', styles.headerImageWrapper].join(' ')}>
            <img src={logo} className={styles.headerImage} />
          </div>
        </div>

        <>
           <span
              className={['container', styles.main].join(' ')}
              style={{margin: '50px inherit', display: 'flex', justifyContent: 'space-evenly'}}
           >
            <img src={img1} style={{maxHeight: "15em", display: 'block'}} />
            <img src={img2} style={{maxHeight: "15rem", display: 'block'}} />
           </span>
        </>

        <div className={['container', styles.main].join(' ')} style={{paddingTop: 0}}>
          <div className={styles.buttonWrapper}>
            <span role="button">
               <Button
                  onClick={function (this: any) {
                     this.setState({
                        isOpen: true,
                     });
                  }.bind(this)}
               >Send product proposal</Button>
            </span>
             {this.state.isShowingMessage && <div className={styles.messageContainer}>
                <i>{this.state.message}</i>
             </div>}
          </div>

          <div className={styles.statsContainer}>
            <span>Total products: {this.state.prodCount}</span>
            {' - '}
            <span>Number of favorites: {this.state.numFavorites}</span>
          </div>

          {products && !!products.length ? <ProductList products={products} onFav={this.favClick} /> : <div></div>}
        </div>

        <>
           <Modal
              isOpen={isOpen}
              className={styles.reactModalContent}
              overlayClassName={styles.reactModalOverlay}
           >
              <div className={styles.modalContentHelper}>
                 <div
                    className={styles.modalClose}
                    onClick={function (this: any) {
                       this.setState({
                          isOpen: false,
                       });
                    }.bind(this)}
                 ><FaTimes /></div>

                 <AddProductForm
                    onSubmit={this.onSubmit}
                 />
              </div>
           </Modal>
        </>
      </React.Fragment>
    );
  }
}
