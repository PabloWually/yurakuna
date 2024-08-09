import { builder } from "../../shared/schema/builder";
import { injector } from "../price.injector";
import { CreatePriceInput } from "../price.type";

builder.mutationField("createPrice", (t) =>
  t.field({
    type: "response",
    args: { input: t.arg({ type: CreatePriceInput, required: true }) },
    errors: {},
    resolve: async (_, {input}) => {
      try {
        await injector.priceCreator.run({
          id: input.id.toString() || "",
          productId: input.productId,
          productAvailable: input.productAvailable,
          productWaste: input.productWaste,
          mod: input.mod,
          transportation: input.transportation,
          misellanious: input.misellanious,
          utility: input.utility,
          isActive: true,
        });
        return {
          success: true,
          error: false,
        };
      } catch (e) {
        return {
          success: false,
          error: true
        }
      }
    }
  })
)
