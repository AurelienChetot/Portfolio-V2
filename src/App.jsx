import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
