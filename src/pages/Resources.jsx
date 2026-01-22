import React from 'react';
import { FileText, Download, BarChart2, Video, Book } from 'lucide-react';
import { resourcesList } from '../data/dmmContent';

const Resources = () => {
    const getIcon = (type) => {
        switch (type) {
            case 'pdf': return <FileText className="w-5 h-5 text-red-500" />;
            case 'chart': return <BarChart2 className="w-5 h-5 text-blue-500" />;
            case 'video': return <Video className="w-5 h-5 text-purple-500" />;
            case 'doc': return <Book className="w-5 h-5 text-blue-600" />;
            default: return <FileText className="w-5 h-5" />;
        }
    }

    return (
        <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-serif font-bold text-brand-navy mb-4">Resource Library</h1>
                <p className="text-xl text-brand-slate max-w-2xl">
                    Curated tools, data visuals, and downloadable content to support your ministry.
                </p>
            </div>

            <div className="space-y-12">
                {resourcesList.map((section) => (
                    <div key={section.category}>
                        <h2 className="text-2xl font-bold text-brand-navy mb-6 border-b border-gray-200 pb-2">
                            {section.category}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.items.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:border-brand-gold/50 hover:shadow-md transition-all group cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-brand-light transition-colors">
                                            {getIcon(item.type)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-navy text-sm">{item.title}</h4>
                                            <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-brand-navy">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
