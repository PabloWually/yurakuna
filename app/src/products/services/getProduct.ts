import { client } from "@/src/shared/config/clientApi"

export const getProduct = async (productId: string) => {
  const response = await client.query({
    product: {
      __args: {
        productId,
      },
      on_QueryProductSuccess: {
        data: {
          id: true,
          name: true,
          unity: true,
          pvp: true,
        },
      },
      on_Error:{
        error: true,
        message: true,
      },
      on_BaseError: {
        error: true,
        message: true,
      },
    },
  });

  if (response.product.__typename === "BaseError")
    throw new Error(response.product.message);

  return response.product.data
}

export type ProductResponse = Awaited<ReturnType<typeof getProduct>>;
