import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../services/createProduct";

interface Request {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export const useSubmitProduct = ({ onError, onSuccess }: Request) => {
  const response = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      if (onSuccess)
        onSuccess(data);
    },
    onError: (error) => {
      if (onError)
        onError(error);
    }
  });

  return response;
}
