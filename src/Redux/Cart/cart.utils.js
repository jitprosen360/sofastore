export const existingCartItem = ({
  prevCartItems,
  nextCartItem
}) => {
  return prevCartItems.find(
    cartItem => cartItem.documentID === nextCartItem.documentID
  );
};

export const handleAddToCart = ({
  prevCartItems,
  nextCartItem
}) => {
  const quantityIncrement = 1;
//   const allsizes = [
//     { label: '3.5', value: '3.5' },
//     { label: '4.5', value: '4.5' },
//     { label: '5', value: '5' },
//     { label: '5.5', value: '5.5' },
//     { label: '6', value: '6' },
//     { label: '7.5', value: '7.5' },
//     { label: '8', value: '8' },
//     { label: '9.5', value: '9.5' },
//     { label: '10.5', value: '10.5' },
//     { label: '12', value: '12' },
//   ];

// const allsizesedit = allsizes.filter(function(p)  { return  p.value})


  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  if (cartItemExists) {
    return prevCartItems.map(cartItem =>
      cartItem.documentID === nextCartItem.documentID
        ? {
          ...cartItem,
          quantity: cartItem.quantity + quantityIncrement,
          // size: cartItem.size + allsizesedit,
         
        } : cartItem
    );
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
      // size: allsizesedit

    }
  ];
};

export const handleRemoveCartItem = ({
  prevCartItems,
  cartItemToRemove
}) => {
  return prevCartItems.filter(item => item.documentID !== cartItemToRemove.documentID);
}

export const handleReduceCartItem = ({
  prevCartItems,
  cartItemToReduce
}) => {
  const existingCartItem = prevCartItems.find(cartItem =>
    cartItem.documentID === cartItemToReduce.documentID);

  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      cartItem => cartItem.documentID !== existingCartItem.documentID
    );
  }
  // if (existingCartItem.size === 1) {
  //   return prevCartItems.filter(
  //     cartItem => cartItem.documentID !== existingCartItem.documentID
  //   );
  // }

  return prevCartItems.map(cartItem =>
    cartItem.documentID === existingCartItem.documentID ?
      {
        ...cartItem,
        quantity: cartItem.quantity - 1,
        // size: cartItem.size - 1
      } : cartItem)
};