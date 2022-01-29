import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { UserAuthContextProvider } from "./userAuth";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </>
  );
}

export default App;
