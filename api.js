const API_URL = 'https://your-backend-api.com';

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export const fetchOrders = async () => {
  const response = await fetch(`${API_URL}/orders`);
  return response.json();
};

export const placeOrder = async (orderDetails) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderDetails),
  });
  return response.json();
};
