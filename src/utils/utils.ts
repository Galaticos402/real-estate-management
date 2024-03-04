export const isSaleBatchOpening = (startDate: string, endDate: string) => {
  const today = Date.now();
  const openingDate = Date.parse(startDate);
  const closedDate = Date.parse(endDate);
  if (openingDate > today) {
    // SaleBatch will be opened in the future
    return SaleBatchOpeningStatus.UPCOMING;
  }
  if (openingDate <= today && today <= closedDate) {
    // SaleBatch is opening
    return SaleBatchOpeningStatus.OPENING;
  }
  return SaleBatchOpeningStatus.CLOSED;
};

export enum SaleBatchOpeningStatus {
  OPENING = "OPENING",
  UPCOMING = "UPCOMING",
  CLOSED = "CLOSED",
}

export const numberToMoney = (moneyAsNumber: number) => {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(moneyAsNumber)
};
