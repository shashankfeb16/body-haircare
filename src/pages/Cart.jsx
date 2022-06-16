import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import styles from "../styles/cart.module.css"

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const handleRefresh = ()=>{
        window.location.reload(false)
    }
    
    if (isEmpty) return <p>Your cart is empty</p>;

    return (
        <>
            <h1>Cart ({totalUniqueItems})</h1>
            <div>
                <h2>Bag</h2>
                {/* <div className={styles.uppercart}>
                    <h3>Quantity</h3>
                    <h3>Total</h3>
                </div> */}
                {items.map((item) => {
                    return <div className={styles.cart}>
                        <div>
                            <img src={item.imageurl} alt="" className={styles.image} />
                        </div>
                        <div className={styles.textbtn}>
                            <h5>{item.name}</h5>
                        </div>
                        <div className="count-btn">
                            <Button onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</Button>
                            <button>{item.quantity}</button>
                            <Button onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</Button>
                        </div>
                        <div>
                            <h5>₹{(item.quantity)*(item.price)}</h5>
                            <Button onClick={()=>{removeItem(item.id);handleRefresh()}}>Remove</Button>
                        </div>
                    </div>
                })}
            </div>
        </>
    );
}


export default Cart