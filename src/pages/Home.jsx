import React from 'react';
import Hero from '../components/Hero';
import { CheckCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Why DMM?</h2>
                            <p className="text-lg text-brand-slate mb-6 leading-relaxed">
                                The Disciple Making Movement (DMM) is not just a program; it's a return to the biblical principles of multiplication. It focuses on obedience-based discipleship, where ordinary people are equipped to discover God's word and share it immediately.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Obedience-based, not just knowledge-based",
                                    "Discovery Bible Study (DBS) method",
                                    "Focus on finding the 'Person of Peace'",
                                    "Rapid multiplication of leaders"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0 mr-3" />
                                        <span className="text-brand-slate font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/training" className="text-brand-navy font-semibold inline-flex items-center hover:text-brand-gold transition">
                                Learn the Strategy <ArrowUpRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-navy rounded-2xl transform rotate-3 opacity-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Group study"
                                className="relative rounded-2xl shadow-xl z-10 w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
