import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
    const cartObj = useSelector(store => store.cartReducer);
    const dispatch = useDispatch();

    const tableBody = cartObj.cartItems.map((item) => {
        return (
            <tr>
                <td>{item.itemName}</td>
                <td>{item.itemPrice}</td>
                <td><Button
                    variant="danger"
                    size="sm"
                    onClick={() => { dispatch({ type: 'DELETE_ITEM_FROM_CART', payload: item }) }}
                >Delete</Button></td>
            </tr>
        )
    })

    return (
        <Container>
            <Table striped bordered hover variant="dark" className='mt-3'>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </Table>
        </Container>
    )
}

export default Cart
