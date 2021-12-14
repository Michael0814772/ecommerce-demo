import React, { useState } from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Item from './Item';

function Items() {

    const itemObj = useSelector(store => store.itemsReducer);
    const [itemsList, setItemList] = useState(itemObj.items);
    const [searchKey, setSearchKey] = useState('')

    function filterItems() {

        const duplicateList = itemObj.items;
        const filteredList = duplicateList.filter(item => item.itemName.toLowerCase().includes(searchKey.toLowerCase()))
        setItemList(filteredList);
    }

    const itemsData = itemsList.map((item) => {

        return (
            <div>
                <Col>
                    <Item item={item} />
                </Col>
            </div>
        )
    })
    return (
        <Container>
            <Form.Control 
            type="text" 
            placeholder="Search Items" 
            className='mt-4' 
            value={searchKey}
            onChange={(e) => {setSearchKey(e.target.value)}} 
            onKeyUp={filterItems}
            />
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className='row'>
                {itemsData}
            </Row>
        </Container>
    )
}

export default Items
