import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';


function Item({ item }) {
    const dispatch = useDispatch();

    return (
        <div className='shadow p-3 mb-5 bg-body rounded'>
            <h1 className='item-name'>{item.itemName}</h1>
            <img src={item.itemImage} alt={item.itemName} className='img-fluid' />
            <h5>{item.itemPrice}</h5>
            <Button variant="primary" size="sm" onClick={() => {dispatch({type: 'ADD_ITEM_TO_CART', payload: item})}}>
                Add to Cart
            </Button>
        </div>
    )
}

export default Item
