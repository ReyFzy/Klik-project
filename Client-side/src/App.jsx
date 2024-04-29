import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Auth/Register";
import Users from "./pages/Dashboard/Users/UsersDashboard"
import Products from "./pages/Dashboard/Products/ProductsDashboard";
import PageNotFound from "./pages/PageNotFound";
import UpdateUser from "./pages/Dashboard/Users/UpdateUser";
import CreateProduct from "./pages/Dashboard/Products/CreateProduct"
import UpdateProduct from "./pages/Dashboard/Products/UpdateProduct";
import OtpVerif from "./pages/Auth/OtpVerif";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

// ##### CHILDREN #####

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verification" element={<OtpVerif />} />
    </Routes>
  );
}

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users/*" element={<UsersRoutes />} />
      <Route path="/products/*" element={<ProductsRoutes />} />
    </Routes>
  );
}

function ProductsRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/add" element={<CreateProduct />} />
      <Route path="/:id" element={<UpdateProduct />} />
    </Routes>
  )
}

function UsersRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/:id" element={<UpdateUser />} />
    </Routes>
  )
}

export default App
