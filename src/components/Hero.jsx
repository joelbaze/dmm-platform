import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-brand-navy pt-24 pb-16 lg:pt-32 lg:pb-24">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-gold opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-brand-gold font-semibold tracking-wide uppercase text-sm mb-4">
                            Accelerate the Movement
                        </h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            Train. Coach. Multiply.
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                            A comprehensive platform for church leaders to understand and apply Disciple Making Movement strategies. Equip yourself to train others.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/training" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-navy bg-brand-gold hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Start Training
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link to="/resources" className="inline-flex items-center justify-center px-8 py-3 border border-white/30 backdrop-blur-sm text-base font-medium rounded-md text-white hover:bg-white/10 transition-all">
                                Access Resources
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Stats / Features Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
                        <div className="bg-brand-gold/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Activity className="text-brand-gold w-6 h-6" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Multiplication Tracking</h3>
                        <p className="text-gray-400 text-sm">Monitor generaional growth and identify movements.</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
                        <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Globe className="text-blue-400 w-6 h-6" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Cross-Cultural Tools</h3>
                        <p className="text-gray-400 text-sm">Resources adapted for diverse US contexts.</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
                        <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="text-green-400 w-6 h-6" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Coach's Community</h3>
                        <p className="text-gray-400 text-sm">Connect with other trainers and mentors.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
