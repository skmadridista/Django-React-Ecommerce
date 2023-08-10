import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./components/screens/HomeScreen";
import ProductScreen from "./components/screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
    ,
        <main>
          <Container className="py-3">
            <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} exact />
            <Route path="/" element={<HomeScreen />} exact />
            </Routes>
          </Container>
        </main>
      ,
      <Footer />
    </Router>
  );
}

export default App;
