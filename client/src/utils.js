export function formatPrice(cents) { // Calculates price in whole currency from cents
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function firstUpper(string) { // Capitalizes first letter of string
  return string.charAt(0).toUpperCase() + string.slice(1);
}