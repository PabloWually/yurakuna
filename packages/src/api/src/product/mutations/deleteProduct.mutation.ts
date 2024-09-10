import { builder } from "../../shared/schema/builder";
import { injector } from "../product.injector";

builder.mutationField("deleteProduct", (t) =>
  t.field({
    type: "response",
    args: {
      productId: t.arg.string({ required: true }),
    },
    resolve: async (_, { productId }) => {
      await injector.productDeleter.run(productId);
      return {
        error: false,
        success: true,
      };
    }
  })
);
