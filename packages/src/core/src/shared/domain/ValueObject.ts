import { InvalidArgumentError } from "./InvalidArgumentError";

type Primitives = String | string | number | Boolean | boolean | Date | string[];

export abstract class ValueObject<T extends Primitives> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
    this.ensureValueIsDefined(value);
  }

  ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError(
        `Value must be defined ${this.constructor.name}`
      );
    }
  }

  equals(other: ValueObject<T>): boolean {
    return (
      other.constructor.name === this.constructor.name &&
      other.value === this.value
    );
  }

  toString(): string {
    return this.value.toString();
  }
}
