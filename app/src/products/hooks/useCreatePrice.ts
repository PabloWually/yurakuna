import { useMutation } from "@tanstack/react-query"
import { createPrice } from "../services/createPrice"

export const useSubmitPrice = (onSuccess: ()=>void) => {
  const response = useMutation({
    mutationFn: createPrice,
    onSuccess: () => {
      onSuccess();
    }
  });

  return response;
}
