import { Price, PriceRepository } from "../../domain";

export class PriceCreator {
  constructor(private respository: PriceRepository) { }
  async run(request: Request) {
    const data = Price.fromPrimitives(request);
    await this.respository.save(data);
  }
}

interface Request {
  id: string,
  productId: string,
  productAvailable: number,
  productWaste: number,
  mod: number,
  transportation: number,
  misellanious: number,
  utility: number,
  isActive: boolean,
}
