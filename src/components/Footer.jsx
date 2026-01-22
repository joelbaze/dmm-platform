import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-serif text-xl font-bold text-brand-gold mb-4">DMM Platform</h3>
                        <p className="text-gray-300 max-w-sm">
                            Empowering church leaders to catalyze disciple making movements across the US through strategic training and coaching.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/training" className="hover:text-brand-gold transition">Training Modules</a></li>
                            <li><a href="/coaching" className="hover:text-brand-gold transition">Coaching Tools</a></li>
                            <li><a href="/resources" className="hover:text-brand-gold transition">Resource Library</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>support@dmmplatform.org</li>
                            <li>1-800-DMM-HELP</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Disciple Making Movement Platform. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
