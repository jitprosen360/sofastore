import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchProductsStart } from './../../Redux/Products/products.actions';
import Product from './Products';
import FormSelect from './../../Components/Forms/FormSelect';
import LoadMore from './../../Components/LoadMore/LoadMore';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row } from "react-bootstrap";
const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductResults = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart({ filterType })
    )
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    navigate(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>
          No search results.
        </p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Show all',
      value: ''
    }, {
      name: 'Sofa',
      value: 'sofa'
    }, {
      name: 'Beds',
      value: 'bed'
    }],
    handleChange: handleFilter
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data
      })
    )
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <Container className="products">

      

      <h1>
        Browse Products
      </h1>

      <FormSelect {...configFilters} />

      <Row className="productResults">
        {data.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (!productThumbnail || !productName ||
            typeof productPrice === 'undefined') return null;

          const configProduct = {
            ...product
          };

          return (
            <Col>
            <Product key={pos} {...configProduct} />
            </Col>
          );
        })}
      </Row>

      {!isLastPage && (
        <LoadMore {...configLoadMore} />
      )}

    </Container>
  );
};

export default ProductResults;