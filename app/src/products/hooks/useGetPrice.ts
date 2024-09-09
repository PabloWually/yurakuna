import { useQuery } from "@tanstack/react-query"
import { getPrice } from "../services/getPrice"

export const useGetPrice = (productId: string | undefined) => {
  const response = useQuery({
    queryFn: () => getPrice(productId ? productId : ""),
    queryKey: ['getPrice'],
  });

  return response;
}
