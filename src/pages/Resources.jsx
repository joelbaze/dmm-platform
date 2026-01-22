import React from 'react';
import { FileText, Download, BarChart2, Video } from 'lucide-react';

const resources = [
    {
        category: "Guides & Manuals",
        items: [
            { type: 'pdf', title: "DMM Field Guide 2024", size: "2.4 MB" },
            { type: 'pdf', title: "Discovery Bible Study Bookmark", size: "0.5 MB" },
            { type: 'pdf', title: "Person of Peace Characteristics", size: "1.1 MB" },
        ]
    },
    {
        category: "Data & Visualization",
        items: [
            { type: 'chart', title: "Global Movement Data 2023", size: "View" },
            { type: 'chart', title: "US Church Planting Heatmap", size: "View" },
        ]
    },
    {
        category: "Media",
        items: [
            { type: 'video', title: "Introduction to DMM (Video)", size: "15 mins" },
            { type: 'video', title: "Testimony: A Movement in Memphis", size: "8 mins" },
        ]
    }
];

const Resources = () => {
    const getIcon = (type) => {
        switch (type) {
            case 'pdf': return <FileText className="w-5 h-5 text-red-500" />;
            case 'chart': return <BarChart2 className="w-5 h-5 text-blue-500" />;
            case 'video': return <Video className="w-5 h-5 text-purple-500" />;
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
                {resources.map((section) => (
                    <div key={section.category}>
                        <h2 className="text-2xl font-bold text-brand-navy mb-6 border-b border-gray-200 pb-2">
                            {section.category}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.items.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:border-brand-gold/50 hover:shadow-md transition-all group">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-brand-light transition-colors">
                                            {getIcon(item.type)}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-brand-navy text-sm">{item.title}</h4>
                                            <p className="text-xs text-brand-slate uppercase tracking-wider">{item.type}</p>
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
