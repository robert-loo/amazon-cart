import "./App.css";
import Header from "./Components/Header";
import CartItems from "./Components/CartItems/cartItems";

function App() {
  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CartItems/>
          <div className="CartTotal">
          </div>
      </div>
    </div>
  );
}

export default App;
