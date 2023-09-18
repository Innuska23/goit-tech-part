export const filterCars = (carInfo, filters) => {
  if (
    filters.price &&
    parseFloat(carInfo.rentalPrice.split('$')[1]) < filters.price
  ) {
    return false;
  }

  if (filters.make && carInfo.make !== filters.make) {
    return false;
  }

  if (
    (filters.range.from && carInfo.mileage <= filters.range.from) ||
    (filters.range.to && carInfo.mileage >= filters.range.to)
  ) {
    return false;
  }

  return true;
};
