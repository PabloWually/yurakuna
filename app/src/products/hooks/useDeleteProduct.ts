import { useMutation } from "@tanstack/react-query"
import { deleteProduct } from "../services/deleteProduct"

export const useDeleteProduct = (
  onSuccess: () => void,
) => {
  const response = useMutation({
    mutationFn: deleteProduct,
    mutationKey: ["deleteProduct"],
    onSuccess: onSuccess,
  });
  
  return response;
}
