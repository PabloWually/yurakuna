import { builder } from "../shared/schema/builder";
import { ListPriceModel, PriceModel } from "./price.model";

export const CreatePriceInput = builder.inputType("CreatePriceInput", {
  fields: (t) => ({
    id: t.id({required: true}),
    productId: t.string({required: true}),
    productAvailable: t.float({required: true}),
    productWaste: t.float({required: true}),
    mod: t.float({required: true}),
    transportation: t.float({required: true}),
    misellanious: t.float({required: true}),
    utility: t.float({required: true}),
    isActive: t.boolean({required: true}),
  })
})

export const PriceType = builder.objectType(PriceModel, {
  fields: (t) => {
    return {
      id: t.exposeID("id"),
      productId: t.exposeString("productId"),
      productAvailable: t.exposeFloat("productAvailable"),
      productWaste: t.exposeFloat("productWaste"),
      mod: t.exposeFloat("mod"),
      transpotation: t.exposeFloat("transportation"),
      misellanious: t.exposeFloat("misellanious"),
      utility: t.exposeFloat("utility"),
      isActive: t.exposeBoolean("isActive"),
    }
  }
});

export const PricesType = builder.objectType(ListPriceModel, {
  fields: (t) => ({
    products: t.field({
      type: t.listRef(PriceType),
      resolve: (root) => root.priceList,
    }),
    total: t.exposeInt("total"),
  }),
});
