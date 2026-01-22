import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Clock, Award } from 'lucide-react';

const courses = [
    {
        id: 1,
        title: "Foundations of J-DMM",
        description: "Understand the core biblical principles behind the Jesus Disciple Making Movement. Shift from knowledge to obedience.",
        duration: "45 mins",
        modules: 5,
        level: "Beginner"
    },
    {
        id: 2,
        title: "Discovery Bible Study (DBS)",
        description: "Master the heart of J-DMM. Learn how to facilitate groups that self-correct and reproduce.",
        duration: "60 mins",
        modules: 3,
        level: "Intermediate"
    },
    {
        id: 3,
        title: "Finding the Person of Peace",
        description: "Learn to identify and invest in the key individuals who will open new networks for the gospel.",
        duration: "30 mins",
        modules: 2,
        level: "Intermediate"
    },
    {
        id: 4,
        title: "Coaching & Multiplication",
        description: "How to mentor new leaders and ensure generational growth without dependency.",
        duration: "90 mins",
        modules: 6,
        level: "Advanced"
    }
];

const Training = () => {
    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-serif font-bold text-brand-navy mb-4">Training Modules</h1>
                <p className="text-xl text-brand-slate max-w-2xl">
                    Comprehensive courses designed to equip you with the practical skills needed to launch and sustain a movement.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                                course.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                                    'bg-purple-100 text-purple-700'
                                }`}>
                                {course.level}
                            </span>
                            <PlayCircle className="w-6 h-6 text-brand-gold group-hover:scale-110 transition-transform" />
                        </div>

                        <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">
                            {course.title}
                        </h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            {course.description}
                        </p>

                        <div className="flex items-center text-sm text-gray-400 space-x-4 border-t border-gray-100 pt-4">
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {course.duration}
                            </div>
                            <div className="flex items-center">
                                <Award className="w-4 h-4 mr-1" />
                                {course.modules} Modules
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Training;
