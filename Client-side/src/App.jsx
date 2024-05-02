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
import Navbar from "./pages/LandingPage";
import NextTopLoader from 'nextjs-toploader';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <NextTopLoader
        color="#10B981"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #10B981,0 0 5px #10B981"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
      <Routes>
        <Route path="/" element={<Navbar />} />
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
