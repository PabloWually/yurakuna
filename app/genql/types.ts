export default {
    "scalars": [
        1,
        4,
        7,
        8,
        9,
        15,
        25
    ],
    "types": {
        "BaseError": {
            "error": [
                1
            ],
            "message": [
                25
            ],
            "__typename": [
                25
            ]
        },
        "Boolean": {},
        "CreatePriceInput": {
            "id": [
                8
            ],
            "isActive": [
                1
            ],
            "misellanious": [
                7
            ],
            "mod": [
                7
            ],
            "productId": [
                25
            ],
            "productPurchased": [
                7
            ],
            "productWaste": [
                7
            ],
            "profit": [
                7
            ],
            "purchaseAmount": [
                7
            ],
            "transportation": [
                7
            ],
            "__typename": [
                25
            ]
        },
        "CreateProductInput": {
            "id": [
                8
            ],
            "isActive": [
                1
            ],
            "name": [
                25
            ],
            "pvp": [
                7
            ],
            "unity": [
                25
            ],
            "__typename": [
                25
            ]
        },
        "Date": {},
        "Error": {
            "error": [
                1
            ],
            "message": [
                25
            ],
            "on_BaseError": [
                0
            ],
            "__typename": [
                25
            ]
        },
        "FilterInput": {
            "field": [
                25
            ],
            "operator": [
                15
            ],
            "values": [
                25
            ],
            "__typename": [
                25
            ]
        },
        "Float": {},
        "ID": {},
        "Int": {},
        "Mutation": {
            "createPrice": [
                11,
                {
                    "input": [
                        2,
                        "CreatePriceInput!"
                    ]
                }
            ],
            "createProduct": [
                13,
                {
                    "input": [
                        3,
                        "CreateProductInput!"
                    ]
                }
            ],
            "__typename": [
                25
            ]
        },
        "MutationCreatePriceResult": {
            "on_BaseError": [
                0
            ],
            "on_MutationCreatePriceSuccess": [
                12
            ],
            "on_Error": [
                5
            ],
            "__typename": [
                25
            ]
        },
        "MutationCreatePriceSuccess": {
            "data": [
                26
            ],
            "__typename": [
                25
            ]
        },
        "MutationCreateProductResult": {
            "on_BaseError": [
                0
            ],
            "on_MutationCreateProductSuccess": [
                14
            ],
            "on_Error": [
                5
            ],
            "__typename": [
                25
            ]
        },
        "MutationCreateProductSuccess": {
            "data": [
                26
            ],
            "__typename": [
                25
            ]
        },
        "Operator": {},
        "Price": {
            "id": [
                8
            ],
            "isActive": [
                1
            ],
            "misellanious": [
                7
            ],
            "mod": [
                7
            ],
            "productId": [
                25
            ],
            "productPurchased": [
                7
            ],
            "productWaste": [
                7
            ],
            "profit": [
                7
            ],
            "purchaseAmount": [
                7
            ],
            "transpotation": [
                7
            ],
            "__typename": [
                25
            ]
        },
        "PriceList": {
            "products": [
                16
            ],
            "total": [
                9
            ],
            "__typename": [
                25
            ]
        },
        "Product": {
            "id": [
                8
            ],
            "isActive": [
                1
            ],
            "name": [
                25
            ],
            "price": [
                16
            ],
            "pvp": [
                7
            ],
            "unity": [
                25
            ],
            "__typename": [
                25
            ]
        },
        "Products": {
            "products": [
                18
            ],
            "total": [
                9
            ],
            "__typename": [
                25
            ]
        },
        "Query": {
            "price": [
                21,
                {
                    "productId": [
                        25,
                        "String!"
                    ]
                }
            ],
            "prices": [
                17,
                {
                    "filters": [
                        6,
                        "[FilterInput!]!"
                    ],
                    "limit": [
                        9,
                        "Int!"
                    ],
                    "offset": [
                        9,
                        "Int!"
                    ]
                }
            ],
            "product": [
                23,
                {
                    "productId": [
                        25,
                        "String!"
                    ]
                }
            ],
            "products": [
                19,
                {
                    "filters": [
                        6,
                        "[FilterInput!]!"
                    ],
                    "limit": [
                        9,
                        "Int!"
                    ],
                    "offset": [
                        9,
                        "Int!"
                    ]
                }
            ],
            "__typename": [
                25
            ]
        },
        "QueryPriceResult": {
            "on_BaseError": [
                0
            ],
            "on_QueryPriceSuccess": [
                22
            ],
            "on_Error": [
                5
            ],
            "__typename": [
                25
            ]
        },
        "QueryPriceSuccess": {
            "data": [
                16
            ],
            "__typename": [
                25
            ]
        },
        "QueryProductResult": {
            "on_BaseError": [
                0
            ],
            "on_QueryProductSuccess": [
                24
            ],
            "on_Error": [
                5
            ],
            "__typename": [
                25
            ]
        },
        "QueryProductSuccess": {
            "data": [
                18
            ],
            "__typename": [
                25
            ]
        },
        "String": {},
        "response": {
            "error": [
                1
            ],
            "success": [
                1
            ],
            "__typename": [
                25
            ]
        }
    }
}