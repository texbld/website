import React from "react";
import ReactDOM from "react-dom/client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./globals.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import fontawesome from "./fontawesome";
import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./docs";
import Footer from "./components/Footer";

const App = () => (
  <Box>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/docs/*" element={<Docs />}></Route>
    </Routes>
    <Footer />
  </Box>
);

// populate first.
fontawesome();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
