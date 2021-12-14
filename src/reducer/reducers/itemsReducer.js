const initialData = {

    items : [
        {
            itemName: 'Samsung Galaxy A12',
            itemImage: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/037618/1.jpg?6075',
            itemPrice: '77,990'
        },
        {
            itemName: 'Apple IPhone 12',
            itemImage: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/609296/1.jpg?1393',
            itemPrice: '650,000'
        },
        {
            itemName: 'Itel P15- 5.0"',
            itemImage: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/965038/1.jpg?6616',
            itemPrice: '27,700'
        },
        {
            itemName: 'XIAOMI XIAOMI Redmi',
            itemImage: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/768888/1.jpg?3964',
            itemPrice: '113,150'
        },
        {
            itemName: 'Samsung Galaxy S8',
            itemImage: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/697234/1.jpg?0694',
            itemPrice: '100,000'
        },
        {
            itemName: 'Samsung Galaxy Note 9',
            itemImage: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/183188/1.jpg?5066',
            itemPrice: '160,000'
        }
    ]
}

function itemsReducer(state = initialData, action) {

    switch (action.type) {
        case 'ADD_ITEM': return {
            ...state,
            items: [...state.items, action.payload]
        }
        default:
            return state;
    }
}

export default itemsReducer