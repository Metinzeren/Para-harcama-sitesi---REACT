import React from "react";
import BasketItem from "./BasketItem";
import "../Basket.css";

export default function Basket({ basket, products, total }) {
  return (
    <div className="basket-container container">
        <h3>Alışveriş Detayları</h3>
      <ul>
        {basket.map((item) => (
          <BasketItem
            key={item.id}
            product={products.find((p) => p.id === item.id)}
            item={item}
          />
        ))}
      </ul>

      <div className="total">Toplam : {total}$</div>
    </div>
  );
}
