import { ProductRepository } from "../../domain";
import { ProductId } from "../../domain/Product";

export class ProductDeleter {
  constructor(private repository: ProductRepository){}
  async run (productId: string) {
    await this.repository.delete(new ProductId(productId));
  }
}
