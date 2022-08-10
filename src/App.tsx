import { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";

const Landing = lazy(() => import("./Components/Landing"));
const Expenses = lazy(() => import("./Components/Expenses"));
const Invoices = lazy(() => import("./Components/Invoices"));

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/invoices">Invoices</NavLink>
        <NavLink to="/expences">Expences</NavLink>
      </nav>
      <Routes>
        <Route
          path=""
          element={
            <Suspense fallback={<>..Loading landing..</>}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path="invoices"
          element={
            <Suspense fallback={<>..Loading invoices..</>}>
              <Invoices />
            </Suspense>
          }
        />
        <Route
          path="expences"
          element={
            <Suspense fallback={<>..Loading expences..</>}>
              <Expenses />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
