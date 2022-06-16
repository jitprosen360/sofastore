import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../Redux/Products/products.actions';
import { addProduct } from './../../Redux/Cart/cart.actions';
import Button from './../Forms/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";
import './styles.css';
import Dropdown from './../Dropdown/Dropdown';

const mapState = state => ({
  product: state.productsData.product,
});

const ProductCard = ({ }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    productThumbnail,
    productName,
    productPrice,
    productDesc,
  } = product;




  useEffect(() => {
    dispatch(
      fetchProductStart(productID)
    )

    return () => {
      dispatch(
        setProduct({})
      )
    }

  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    navigate('/cart');
  }

  const configAddToCartBtn = {
    type: 'button'
  }



  // const [sizes, setSizes] = useState(size);
  
  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   const filteredprice = value === "size"
  //     ? size : size.filter((p) => p.label === value);
  //     setSizes(filteredprice);

  // };


  return (
    <Container className="productCard">
      <Row>
        <Col>
          <div className="hero">
            <img src={productThumbnail} />
          </div>
          <div className="addToCart">
            <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
              Add to cart
            </Button>
          </div>

        </Col>
        <Col>
          <div className="productDetails">

            <h3>
              {productName}
            </h3>

            <h3>
              {productPrice}
            </h3>
            <h2></h2>
            <div className='dropdown'>
              {/* <Dropdown
                label="Please Select a Size"
                options={size}
                onChange={handleChange}
              /> */}

            </div>

            {/* {sizes} */}


            <div className="addToCart">
              <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </div>

            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDesc }} />

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCard;