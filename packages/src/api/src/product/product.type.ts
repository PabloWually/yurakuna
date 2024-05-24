import { builder } from "../shared/schema/builder";
import { ListProductModel, ProductModel } from "./product.model";

export const CreateProductInput = builder.inputType("CreateProductInput", {
  fields: (t) => ({
    id: t.id({required: true}),
    name: t.string({required: true}),
    unity: t.string({required: true}),
    price: t.float({required: true}),
    isActive: t.boolean({required: true}),
  })
})

export const ProductType = builder.objectType(ProductModel, {
  fields: (t) => {
    return {
      id: t.exposeID("id"),
      name: t.exposeString("name"),
      unity: t.exposeString("unity"),
      price: t.exposeFloat("price"),
      isActive: t.exposeBoolean("isActive"),
    }
  }
});

export const ProductsType = builder.objectType(ListProductModel, {
  fields: (t) => ({
    products: t.field({
      type: t.listRef(ProductType),
      resolve: (root) => root.productList,
    }),
    total: t.exposeInt("total"),
  }),
});
