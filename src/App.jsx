import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Training from './pages/Training';
import Coaching from './pages/Coaching';
import Resources from './pages/Resources';

// Utility to scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// Simple Layout Wrapper
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-brand-light">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/coaching" element={<Coaching />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
