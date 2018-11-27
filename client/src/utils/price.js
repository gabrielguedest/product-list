export function formatPrice(price) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2
  });

  return formatter.format(price);
}

export function calculatePrice(price, discount) {
  if (discount <= 0) {
    return price;
  }

  return formatPrice(price - (price * discount) / 100);
}
