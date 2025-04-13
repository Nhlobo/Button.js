import React from 'react';
import './ProductCard.css';
import Button from '../components/Button';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R{product.price}</p>
      <Button text="Add to Cart" onClick={() => onAddToCart(product.id)} />
    </div>
  );
};

export default ProductCard;
