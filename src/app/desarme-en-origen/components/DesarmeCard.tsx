import React from 'react';

type DesarmeCardProps = {
    icon: string;
    title: string;
};

export default function DesarmeCard({ icon, title }: DesarmeCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full flex flex-col items-center justify-center text-center transition-all hover:shadow-xl hover:-translate-y-1 group">
            <div className="mb-2 text-center">
                <div className="py-4">
                    <i className={`${icon} text-5xl text-blue-500 group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <div className="w-full mt-2">
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">{title}</h3>
                </div>
            </div>
        </div>
    );
}
