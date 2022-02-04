import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./product.json";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(10665165165516651560);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
    console.log(setMoney);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);
  return (
    <div className="App">
      <Header total={total} setTotal={setTotal} money={money} />
      <div className="container products">
        {products.map((product) => (
          <Product
            money={money}
            total={total}
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        ))}
      </div>

      <Basket products={products} total={total} basket={basket} />

      <button className="opa" onClick={resetBasket}>Sepeti sıfırla</button>
    </div>
  );
}

export default App;
