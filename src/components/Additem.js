import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Additem() {

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemImage, setItemImage] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    function addItem() {
        var item = {
            itemName: itemName,
            itemPrice: itemPrice,
            itemImage: itemImage
        }
        dispatch({type: 'ADD_ITEM', payload: item})
        history.push('/')
    }

    return (
        <Container>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Item Name
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                    </Col>
                    <Form.Label column sm="4" className='mt-4'>
                        Item Price
                    </Form.Label>
                    <Col sm="5" className='mt-4'>
                        <Form.Control type="text" placeholder="Item Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.vale)} />
                    </Col>
                    <Form.Label column sm="4" className='mt-4'>
                        Item Image URL
                    </Form.Label>
                    <Col sm="5" className='mt-4'>
                        <Form.Control type="text" placeholder="Item Image" value={itemImage} onChange={(e) => setItemImage(e.target.value)} />
                    </Col>
                </Form.Group>
                <Button className='btn-add-item' onClick={addItem}>Add Item</Button>
            </Form>
        </Container>
    )
}

export default Additem
