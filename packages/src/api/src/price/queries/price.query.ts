import { builder } from "../../shared/schema/builder";
import { injector } from "../price.injector";
import { PriceModel } from "../price.model";

builder.queryField("price", (t) =>
  t.field({
    type: PriceModel,
    errors: {},
    args: {
      priceId: t.arg.string({required: true}),
    },
    resolve: async(_, {priceId}) => {
      const product = await injector.priceFinder.run(priceId);
      return product.toPrimitives();
    }
  })
)
