export const addItemToCart = (cartItems, cartItemToAdd) =>{

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem){
        return cartItems.map(
            cartItem => cartItem.id ===cartItemToAdd.id 
            ? {...cartItem , quantity:cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems , {...cartItemToAdd , quantity:1}];

};

export const removeItemFromCart = (cartItem , cartItemToRemove)=>{

    const existingCartItem = cartItem.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        return cartItem.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItem.map(
        cartItem => 
        cartItem.id === cartItemToRemove.id ? 
        {...cartItem , quantity : cartItem.quantity - 1} : cartItem
    )

};