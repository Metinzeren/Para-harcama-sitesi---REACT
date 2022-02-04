import React from "react";
import "../Product.css";
export default function Product({ product, basket, setBasket, total, money }) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    // baskkette ürün var mı yok mu onu kontrol ediyoruz burda
    const checkBasket = basket.find((item) => item.id === product.id);
    //ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      // filter burda zaten eklenmiş ürünü hariç tutuyor
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      //yoksa burda önce ürünü ekliyoruz
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };
  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <div className="product">
      <h6>{product.title}</h6>
      <img src={product.image} alt="Resim"></img>
      <div className="price">{product.price}$</div>
      <div className="actions">
        {/* !basketItem yaparak disable ediyoruz boşsa */}
        <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>
          Sat
        </button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>
          Satın al
        </button>
      </div>
    </div>
  );
}
