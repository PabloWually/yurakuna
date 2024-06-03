import { Price, PriceRepository } from "../../domain";
import { PriceId } from "../../domain/Price";
import { NotFoundError } from "../../../shared/domain/NotFoundError";

export class PriceFinder {
  constructor(private repository: PriceRepository){}
  async run(productId: string): Promise<Price>{
    const response = await this.repository.find(new PriceId(productId));
    if (response) {
      return response;
    }

    throw new NotFoundError("Precio no encontrado");
  }
}
