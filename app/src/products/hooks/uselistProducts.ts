import { useQuery } from "@tanstack/react-query";
import { ProductResponse, RequestProducts, getProducts } from "../services/getProducts";

export const useListProducts = (request: RequestProducts) => {
  const response = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(request),
  });
  
  return response;
}

interface Product {
  id: string,
  name: string,
  pvp: number,
  unity: string,
}

interface Products {
  products: Product[],
  total: number,
}
