import { useQuery } from "@tanstack/react-query"
import { getProduct } from "../services/getProduct"

export const useGetProduct = (productId: string | undefined) => {
  const response = useQuery({
    queryFn: () => getProduct(productId ? productId : ""),
    queryKey: ["getProduct"]
  });
  return response;
}
