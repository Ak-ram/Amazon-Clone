import "./App.sass";
import Header from "./layout/header/Header";
import Checkout from "./pages/checkout/checkout.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Payment from "./pages/payment/payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./layout/footer/footer";
import ReturnsAndOrders from "./pages/returnsAndOrders/returnsAndOrders";

function App() {
  const promise = loadStripe(
    "pk_test_51KcqTbJP2aYFDchSRSRiz0eRRnJ9yQZSQpISY9NBwWRcBavgFoBe0nfevmIa7auygb2MQTWWKjSnsgHoI7t05DTz00zijRsS9S"
  );
  return (
    // BEM

    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/*Inseted of Switch in v6*/}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/returnsAndOrders" element={<ReturnsAndOrders />} />
          
            <Route path="/payment" element={
              <Elements stripe={promise}><Payment /></Elements>
            } />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
