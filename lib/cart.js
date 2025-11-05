// lib/cart.js
export const getCart = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  return [];
};

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (product) => {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  alert("✅ Added to cart!");
};