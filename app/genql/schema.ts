// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Date: any,
    Float: number,
    ID: string,
    Int: number,
    String: string,
}

export interface BaseError {
    error: Scalars['Boolean']
    message: Scalars['String']
    __typename: 'BaseError'
}

export type Error = (BaseError) & { __isUnion?: true }

export interface Mutation {
    createPrice: MutationCreatePriceResult
    createProduct: MutationCreateProductResult
    __typename: 'Mutation'
}

export type MutationCreatePriceResult = (BaseError | MutationCreatePriceSuccess) & { __isUnion?: true }

export interface MutationCreatePriceSuccess {
    data: response
    __typename: 'MutationCreatePriceSuccess'
}

export type MutationCreateProductResult = (BaseError | MutationCreateProductSuccess) & { __isUnion?: true }

export interface MutationCreateProductSuccess {
    data: response
    __typename: 'MutationCreateProductSuccess'
}

export type Operator = 'CONTAINS' | 'DATE_GTE' | 'DATE_LTE' | 'EQUAL' | 'HAS' | 'HAS_EVERY' | 'HAS_SOME' | 'NOT_EQUAL' | 'SEARCH'

export interface Price {
    id: Scalars['ID']
    isActive: Scalars['Boolean']
    misellanious: Scalars['Float']
    mod: Scalars['Float']
    productAvailable: Scalars['Float']
    productId: Scalars['String']
    productWaste: Scalars['Float']
    transpotation: Scalars['Float']
    utility: Scalars['Float']
    __typename: 'Price'
}

export interface PriceList {
    products: Price[]
    total: Scalars['Int']
    __typename: 'PriceList'
}

export interface Product {
    id: Scalars['ID']
    isActive: Scalars['Boolean']
    name: Scalars['String']
    pvp: Scalars['Float']
    unity: Scalars['String']
    __typename: 'Product'
}

export interface Products {
    products: Product[]
    total: Scalars['Int']
    __typename: 'Products'
}

export interface Query {
    price: QueryPriceResult
    prices: PriceList
    product: QueryProductResult
    products: Products
    __typename: 'Query'
}

export type QueryPriceResult = (BaseError | QueryPriceSuccess) & { __isUnion?: true }

export interface QueryPriceSuccess {
    data: Price
    __typename: 'QueryPriceSuccess'
}

export type QueryProductResult = (BaseError | QueryProductSuccess) & { __isUnion?: true }

export interface QueryProductSuccess {
    data: Product
    __typename: 'QueryProductSuccess'
}

export interface response {
    error: (Scalars['Boolean'] | null)
    success: Scalars['Boolean']
    __typename: 'response'
}

export interface BaseErrorGenqlSelection{
    error?: boolean | number
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreatePriceInput {id: Scalars['ID'],isActive: Scalars['Boolean'],misellanious: Scalars['Float'],mod: Scalars['Float'],productAvailable: Scalars['Float'],productId: Scalars['String'],productWaste: Scalars['Float'],transportation: Scalars['Float'],utility: Scalars['Float']}

export interface CreateProductInput {id: Scalars['ID'],isActive: Scalars['Boolean'],name: Scalars['String'],pvp: Scalars['Float'],unity: Scalars['String']}

export interface ErrorGenqlSelection{
    error?: boolean | number
    message?: boolean | number
    on_BaseError?: BaseErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterInput {field: Scalars['String'],operator: Operator,values: Scalars['String']}

export interface MutationGenqlSelection{
    createPrice?: (MutationCreatePriceResultGenqlSelection & { __args: {input: CreatePriceInput} })
    createProduct?: (MutationCreateProductResultGenqlSelection & { __args: {input: CreateProductInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationCreatePriceResultGenqlSelection{
    on_BaseError?:BaseErrorGenqlSelection,
    on_MutationCreatePriceSuccess?:MutationCreatePriceSuccessGenqlSelection,
    on_Error?: ErrorGenqlSelection,
    __typename?: boolean | number
}

export interface MutationCreatePriceSuccessGenqlSelection{
    data?: responseGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationCreateProductResultGenqlSelection{
    on_BaseError?:BaseErrorGenqlSelection,
    on_MutationCreateProductSuccess?:MutationCreateProductSuccessGenqlSelection,
    on_Error?: ErrorGenqlSelection,
    __typename?: boolean | number
}

export interface MutationCreateProductSuccessGenqlSelection{
    data?: responseGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceGenqlSelection{
    id?: boolean | number
    isActive?: boolean | number
    misellanious?: boolean | number
    mod?: boolean | number
    productAvailable?: boolean | number
    productId?: boolean | number
    productWaste?: boolean | number
    transpotation?: boolean | number
    utility?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceListGenqlSelection{
    products?: PriceGenqlSelection
    total?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductGenqlSelection{
    id?: boolean | number
    isActive?: boolean | number
    name?: boolean | number
    pvp?: boolean | number
    unity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductsGenqlSelection{
    products?: ProductGenqlSelection
    total?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    price?: (QueryPriceResultGenqlSelection & { __args: {priceId: Scalars['String']} })
    prices?: (PriceListGenqlSelection & { __args: {filters?: FilterInput[], limit: Scalars['Int'], offset: Scalars['Int']} })
    product?: (QueryProductResultGenqlSelection & { __args: {productId: Scalars['String']} })
    products?: (ProductsGenqlSelection & { __args: {filters?: FilterInput[], limit: Scalars['Int'], offset: Scalars['Int']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryPriceResultGenqlSelection{
    on_BaseError?:BaseErrorGenqlSelection,
    on_QueryPriceSuccess?:QueryPriceSuccessGenqlSelection,
    on_Error?: ErrorGenqlSelection,
    __typename?: boolean | number
}

export interface QueryPriceSuccessGenqlSelection{
    data?: PriceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryProductResultGenqlSelection{
    on_BaseError?:BaseErrorGenqlSelection,
    on_QueryProductSuccess?:QueryProductSuccessGenqlSelection,
    on_Error?: ErrorGenqlSelection,
    __typename?: boolean | number
}

export interface QueryProductSuccessGenqlSelection{
    data?: ProductGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface responseGenqlSelection{
    error?: boolean | number
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const BaseError_possibleTypes: string[] = ['BaseError']
    export const isBaseError = (obj?: { __typename?: any } | null): obj is BaseError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaseError"')
      return BaseError_possibleTypes.includes(obj.__typename)
    }
    


    const Error_possibleTypes: string[] = ['BaseError']
    export const isError = (obj?: { __typename?: any } | null): obj is Error => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isError"')
      return Error_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const MutationCreatePriceResult_possibleTypes: string[] = ['BaseError','MutationCreatePriceSuccess']
    export const isMutationCreatePriceResult = (obj?: { __typename?: any } | null): obj is MutationCreatePriceResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutationCreatePriceResult"')
      return MutationCreatePriceResult_possibleTypes.includes(obj.__typename)
    }
    


    const MutationCreatePriceSuccess_possibleTypes: string[] = ['MutationCreatePriceSuccess']
    export const isMutationCreatePriceSuccess = (obj?: { __typename?: any } | null): obj is MutationCreatePriceSuccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutationCreatePriceSuccess"')
      return MutationCreatePriceSuccess_possibleTypes.includes(obj.__typename)
    }
    


    const MutationCreateProductResult_possibleTypes: string[] = ['BaseError','MutationCreateProductSuccess']
    export const isMutationCreateProductResult = (obj?: { __typename?: any } | null): obj is MutationCreateProductResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutationCreateProductResult"')
      return MutationCreateProductResult_possibleTypes.includes(obj.__typename)
    }
    


    const MutationCreateProductSuccess_possibleTypes: string[] = ['MutationCreateProductSuccess']
    export const isMutationCreateProductSuccess = (obj?: { __typename?: any } | null): obj is MutationCreateProductSuccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutationCreateProductSuccess"')
      return MutationCreateProductSuccess_possibleTypes.includes(obj.__typename)
    }
    


    const Price_possibleTypes: string[] = ['Price']
    export const isPrice = (obj?: { __typename?: any } | null): obj is Price => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPrice"')
      return Price_possibleTypes.includes(obj.__typename)
    }
    


    const PriceList_possibleTypes: string[] = ['PriceList']
    export const isPriceList = (obj?: { __typename?: any } | null): obj is PriceList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPriceList"')
      return PriceList_possibleTypes.includes(obj.__typename)
    }
    


    const Product_possibleTypes: string[] = ['Product']
    export const isProduct = (obj?: { __typename?: any } | null): obj is Product => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProduct"')
      return Product_possibleTypes.includes(obj.__typename)
    }
    


    const Products_possibleTypes: string[] = ['Products']
    export const isProducts = (obj?: { __typename?: any } | null): obj is Products => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProducts"')
      return Products_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const QueryPriceResult_possibleTypes: string[] = ['BaseError','QueryPriceSuccess']
    export const isQueryPriceResult = (obj?: { __typename?: any } | null): obj is QueryPriceResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryPriceResult"')
      return QueryPriceResult_possibleTypes.includes(obj.__typename)
    }
    


    const QueryPriceSuccess_possibleTypes: string[] = ['QueryPriceSuccess']
    export const isQueryPriceSuccess = (obj?: { __typename?: any } | null): obj is QueryPriceSuccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryPriceSuccess"')
      return QueryPriceSuccess_possibleTypes.includes(obj.__typename)
    }
    


    const QueryProductResult_possibleTypes: string[] = ['BaseError','QueryProductSuccess']
    export const isQueryProductResult = (obj?: { __typename?: any } | null): obj is QueryProductResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryProductResult"')
      return QueryProductResult_possibleTypes.includes(obj.__typename)
    }
    


    const QueryProductSuccess_possibleTypes: string[] = ['QueryProductSuccess']
    export const isQueryProductSuccess = (obj?: { __typename?: any } | null): obj is QueryProductSuccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryProductSuccess"')
      return QueryProductSuccess_possibleTypes.includes(obj.__typename)
    }
    


    const response_possibleTypes: string[] = ['response']
    export const isresponse = (obj?: { __typename?: any } | null): obj is response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isresponse"')
      return response_possibleTypes.includes(obj.__typename)
    }
    

export const enumOperator = {
   CONTAINS: 'CONTAINS' as const,
   DATE_GTE: 'DATE_GTE' as const,
   DATE_LTE: 'DATE_LTE' as const,
   EQUAL: 'EQUAL' as const,
   HAS: 'HAS' as const,
   HAS_EVERY: 'HAS_EVERY' as const,
   HAS_SOME: 'HAS_SOME' as const,
   NOT_EQUAL: 'NOT_EQUAL' as const,
   SEARCH: 'SEARCH' as const
}
