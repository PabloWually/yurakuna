export default {
    "scalars": [
        1,
        4,
        7,
        8,
        9,
        17,
        27
    ],
    "types": {
        "BaseError": {
            "error": [
                1
            ],
            "message": [
                27
            ],
            "__typename": [
                27
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
                27
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
                27
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
                27
            ],
            "pvp": [
                7
            ],
            "unity": [
                27
            ],
            "__typename": [
                27
            ]
        },
        "Date": {},
        "Error": {
            "error": [
                1
            ],
            "message": [
                27
            ],
            "on_BaseError": [
                0
            ],
            "__typename": [
                27
            ]
        },
        "FilterInput": {
            "field": [
                27
            ],
            "operator": [
                17
            ],
            "values": [
                27
            ],
            "__typename": [
                27
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
            "deleteProduct": [
                15,
                {
                    "productId": [
                        27,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                27
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
                27
            ]
        },
        "MutationCreatePriceSuccess": {
            "data": [
                28
            ],
            "__typename": [
                27
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
                27
            ]
        },
        "MutationCreateProductSuccess": {
            "data": [
                28
            ],
            "__typename": [
                27
            ]
        },
        "MutationDeleteProductResult": {
            "on_BaseError": [
                0
            ],
            "on_MutationDeleteProductSuccess": [
                16
            ],
            "on_Error": [
                5
            ],
            "__typename": [
                27
            ]
        },
        "MutationDeleteProductSuccess": {
            "data": [
                28
            ],
            "__typename": [
                27
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
                27
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
                27
            ]
        },
        "PriceList": {
            "products": [
                18
            ],
            "total": [
                9
            ],
            "__typename": [
                27
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
                27
            ],
            "price": [
                18
            ],
            "pvp": [
                7
            ],
            "unity": [
                27
            ],
            "__typename": [
                27
            ]
        },
        "Products": {
            "products": [
                20
            ],
            "total": [
                9
            ],
            "__typename": [
                27
            ]
        },
        "Query": {
            "price": [
                23,
                {
                    "productId": [
                        27,
                        "String!"
                    ]
                }
            ],
            "prices": [
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
            "product": [
                25,
                {
                    "productId": [
                        27,
                        "String!"
                    ]
                }
            ],
            "products": [
                21,
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
                27
            ]
        },
        "QueryPriceResult": {
            "on_BaseError": [
                0
            ],
            "on_QueryPriceSuccess": [
                24
            ],
            "on_Error": [
                5
            ],
            "__typename": [
                27
            ]
        },
        "QueryPriceSuccess": {
            "data": [
                18
            ],
            "__typename": [
                27
            ]
        },
        "QueryProductResult": {
            "on_BaseError": [
                0
            ],
            "on_QueryProductSuccess": [
                26
            ],
            "on_Error": [
                5
            ],
            "__typename": [
                27
            ]
        },
        "QueryProductSuccess": {
            "data": [
                20
            ],
            "__typename": [
                27
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
                27
            ]
        }
    }
}