import "./App.css"
import Header from "./Components/Header"
import CartItems from "./Components/CartItems/cartItems"
import CartTotal from "./Components/CartTotal/CartTotal"


function App() {
  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CartItems/>
        <CartTotal/>
      </div>
    </div>
  );
}

export default App;


