export const calculateUnitValue = ({
  productPurchased,
  purchaseAmount,
  productWaste,
  transportation,
  profit,
  misellanious,
  mod,
}: ProductValues): CalculatedValues => {
  const productAvailable = productPurchased - productWaste;
  const purchaseUnitAmount = purchaseAmount / productPurchased;
  const wasteAmount = productWaste * purchaseUnitAmount;
  const wasteValue = wasteAmount / productAvailable;
  const unitAmoutAvailable = purchaseUnitAmount + wasteValue;
  const unitPrice = misellanious + mod + transportation + unitAmoutAvailable;
  const profitMargin = unitPrice * profit;
  const unitPVP = profitMargin + unitPrice;

  return {
    unitPVP: Number(unitPVP.toFixed(4)),
    calculatedValues: {
      productAvailable,
      purchaseUnitAmount,
      wasteAmount,
      wasteValue,
      unitAmoutAvailable,
      unitPrice,
      profitMargin,
    }
  }
}

export interface CalculatedValues {
  unitPVP: number,
  calculatedValues: {
    productAvailable: number,
    purchaseUnitAmount: number,
    wasteAmount: number,
    wasteValue: number,
    unitAmoutAvailable: number,
    unitPrice: number,
    profitMargin: number,
  }
}

export interface ProductValues {
  productPurchased: number,
  productWaste: number,
  purchaseAmount: number,
  transportation: number,
  profit: number,
  misellanious: number,
  mod: number
}
