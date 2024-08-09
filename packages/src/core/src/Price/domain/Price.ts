import { AggregateRoot } from "../../shared/domain/AggregateRoot"
import { BooleanValue } from "../../shared/domain/BooleanValue";
import { PositiveNumber } from "../../shared/domain/PositiveNumber";
import { StringValue } from "../../shared/domain/StringValue";
import { Primitives } from "../..//shared/domain/Primitives";
import { Uuid } from "../../shared/domain/Uuid";

export class Price extends AggregateRoot {
  constructor (
    readonly id: PriceId,
    readonly productId: ProductId,
    readonly productAvailable: ProductAvailable,
    readonly productWaste: ProductWaste,
    readonly mod:MOD,
    readonly transportation: Transportation,
    readonly misellanious: Misellanious,
    readonly utility: Utility,
    readonly isActive: IsActive,
  ) {
    super();
  }

  static fromPrimitives(primitives: Primitives<Price>): Price{
    return new Price(
      new PriceId(primitives.id),
      new ProductId(primitives.productId),
      new ProductAvailable(primitives.productAvailable),
      new ProductWaste(primitives.productWaste),
      new MOD(primitives.mod),
      new Transportation(primitives.transportation),
      new Misellanious(primitives.misellanious),
      new Utility(primitives.utility),
      new IsActive(primitives.isActive),
    );
  }

  toPrimitives(): Primitives<Price>{
    return{
      id: this.id.value,
      productId: this.productId.value,
      productAvailable: this.productAvailable.value,
      productWaste: this.productWaste.value,
      mod: this.mod.value,
      transportation: this.transportation.value,
      misellanious: this.misellanious.value,
      utility: this.utility.value,
      isActive: this.isActive.value,
    }
  }
}

export class PriceId extends Uuid{}
class ProductId extends StringValue{}
class ProductAvailable extends PositiveNumber{}
class ProductWaste extends PositiveNumber{}
class MOD extends PositiveNumber{}
class Transportation extends PositiveNumber{}
class Misellanious extends PositiveNumber{}
class Utility extends PositiveNumber{}
class IsActive extends BooleanValue{}
