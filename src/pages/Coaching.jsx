import React from 'react';
import { MessageSquare, Target, TrendingUp, Users } from 'lucide-react';

const Coaching = () => {
    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-serif font-bold text-brand-navy mb-4">Coach the Trainer</h1>
                <p className="text-xl text-brand-slate">
                    Resources and guides specifically for those mentoring other leaders. true multiplication happens through intentional coaching relationships.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                <div className="bg-brand-navy text-white rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Target className="w-32 h-32" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">The MAWL Principle</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold mr-3">M</span> Model</li>
                        <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold mr-3">A</span> Assist</li>
                        <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold mr-3">W</span> Watch</li>
                        <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold mr-3">L</span> Leave</li>
                    </ul>
                </div>

                <div className="col-span-1 lg:col-span-2 space-y-8">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-brand-gold shadow-sm">
                        <div className="flex items-start">
                            <MessageSquare className="w-6 h-6 text-brand-slate mt-1 mr-4" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-navy">Key Coaching Questions</h4>
                                <p className="text-gray-600 mt-2">"What is God saying to you?" • "What are you going to do about it?" • "How can I help you?"</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                        <div className="flex items-start">
                            <TrendingUp className="w-6 h-6 text-brand-slate mt-1 mr-4" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-navy">Tracking Progress</h4>
                                <p className="text-gray-600 mt-2">Use the GenMapper tool to visualize generational growth. Look for 4th generation streams.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
                        <div className="flex items-start">
                            <Users className="w-6 h-6 text-brand-slate mt-1 mr-4" />
                            <div>
                                <h4 className="font-bold text-lg text-brand-navy">Peer Coaching Groups</h4>
                                <p className="text-gray-600 mt-2">Set up "Iron on Iron" groups where practitioners troubleshoot barriers together weekly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coaching;
