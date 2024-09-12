import { client } from "@/src/shared/config/clientApi"

export const createPrice = async (input: any) => {
  const response = await client.mutation({
    createPrice: {
      __args: { input },
      on_MutationCreatePriceSuccess: {
        data: {
          error: true,
          success: true,
        },
      },
      on_Error: {
        error: true,
        message: true,
      },
      on_BaseError: {
        error: true,
        message: true,
      },
    },
  });

  if (response.createPrice.__typename === "BaseError")
    throw new Error(response.createPrice.message);
}
