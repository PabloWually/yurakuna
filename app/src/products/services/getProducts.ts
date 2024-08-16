import { client } from "@/src/shared/config/clientApi"

export const getProducts = async ({ offset, limit }: RequestProducts) => {
  const response = await client.query({
    products: {
      __args: {
        limit,
        offset,
      },
      products: {
        id: true,
        name: true,
        pvp: true,
        unity: true,
      },
      total: true,
    }
  });

  return response.products;
}

export type ProductResponse = Awaited<ReturnType<typeof getProducts>>;

export interface RequestProducts {
  offset: number;
  limit: number;
}
