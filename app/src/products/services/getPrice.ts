import { client } from "@/src/shared/config/clientApi"

export const getPrice = async (productId: string) => {
  const response = await client.query({
    price: {
      __args: {
        productId,
      },
      on_QueryPriceSuccess: {
        data: {
          productId: true,
          productPurchased: true,
          purchaseAmount: true,
          productWaste: true,
          profit: true,
          transpotation: true,
          misellanious: true,
          mod: true,
        },
      },
      on_BaseError: {
        message: true,
        error: true,
      },
      on_Error: {
        error: true,
        message: true,
      },
    },
  });

  if (response.price.__typename === "BaseError")
    throw new Error(response.price.message);

  return response.price.data;
}

export type PriceResponse = Awaited<ReturnType<typeof getPrice>>;
