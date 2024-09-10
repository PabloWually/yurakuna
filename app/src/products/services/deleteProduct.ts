import { client } from "@/src/shared/config/clientApi"

export const deleteProduct = async (productId: string) => {
  const response = await client.mutation({
    deleteProduct: {
      __args: {
        productId,
      },
      on_Error: {
        message: true,
        error: true,
      },
      on_MutationDeleteProductSuccess: {
        data: {
          error: true,
          success: true,
        },
      },
    }
  });

  if (response.deleteProduct.__typename === "BaseError")
    throw new Error(response.deleteProduct.message);
}
