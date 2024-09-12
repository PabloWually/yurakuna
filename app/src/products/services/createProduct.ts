import { client } from "@/src/shared/config/clientApi"

export const createProduct = async (input: any) => {
  const response = await client.mutation({
    createProduct: {
      __args: { input },
      on_MutationCreateProductSuccess: {
        data: {
          success: true,
          error: true,
        },
      },
      on_Error: {
        error: true,
        message: true,
      },
      on_BaseError: {
        error: true,
        message: true,
      }
    }
  });

  if (response.createProduct.__typename === "BaseError") {
    throw new Error(response.createProduct.message);
  }
}
