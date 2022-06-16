import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from './../../Redux/Cart/cart.actions';
import Checkout from './Checkout';



const Item = (product) => {
  const dispatch = useDispatch();
  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID,
    size
  } = product;

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID
      })
    );
  }

  const handleAddProduct = (product) => {
    dispatch(
      addProduct(product)
    )
  }
  const handleReduceItem = (product) => {
    dispatch(
      reduceCartItem(product)
    );
  }



  const [dropdown , setDropdown ] = useState('1'); 

  let handleChange = (e) => {
    let value = e.target.value;
    let filteredprice = value  ;
    
     setDropdown(filteredprice, ...dropdown)
   }

  return (

     

    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>
            {productName}
          </td>
          <td>
            <span className="cartBtn"
              onClick={() => handleReduceItem(product)}>
              {`< `}
            </span>
            <span>
              {quantity}
            </span>
            <span className="cartBtn"
              onClick={() => handleAddProduct(product)}>
              {` >`}
            </span>
          </td>

          <td>
            <select dropdown={dropdown} onChange={handleChange}>
                <option label='3.5' value='1'>3.5</option>
                <option label='4.5' value='1.5'>4.5</option>
                <option label='5.5' value='2'>5.5</option>
                <option label='6.5' value='2.5'>6.5</option>
                <option label='7.5' value='3'>7.5</option>
            </select>
         
          </td>
          
          <td>
            {  productPrice * dropdown }
          </td>
          <td align="center">
            <span className="cartBtn remove" onClick={() => handleRemoveCartItem(documentID)}>
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Item;