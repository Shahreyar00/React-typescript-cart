import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const App = () => {
    return (
        <ShoppingCartProvider>
            <Router>
                <Navbar />
                <Container className="mb-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Container>
            </Router>
        </ShoppingCartProvider>
    )
}

export default App