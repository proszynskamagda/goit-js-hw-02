function getShippingCost(country) {
  let pricel;
  const lowerCaseCountry = country.toLowerCase();

  switch (lowerCaseCountry) {
    case `china`:
      price = 100;
      break;
    case `chile`:
      price = 250;
      break;
    case `australia`:
      price = 170;
      break;
    case `jamaica`:
      price = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
  return `Shipping to ${country} will cost ${price} credits`;
}
