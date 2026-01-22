import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, BookOpen, UserCheck, Library } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Training', path: '/training', icon: <BookOpen className="w-4 h-4 mr-2" /> },
        { name: 'Coaching', path: '/coaching', icon: <UserCheck className="w-4 h-4 mr-2" /> },
        { name: 'Resources', path: '/resources', icon: <Library className="w-4 h-4 mr-2" /> },
    ];

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="bg-brand-navy p-2 rounded-lg">
                            <Users className="w-6 h-6 text-brand-gold" />
                        </div>
                        <span className="font-serif font-bold text-xl text-brand-navy tracking-tight">J-DMM Platform</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                                    ? 'text-brand-navy bg-brand-light font-bold'
                                    : 'text-brand-slate hover:text-brand-navy hover:bg-gray-50'
                                    }`}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-slate hover:text-brand-navy focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden bg-white border-b border-gray-100"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-brand-slate hover:text-brand-navy hover:bg-gray-50"
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
