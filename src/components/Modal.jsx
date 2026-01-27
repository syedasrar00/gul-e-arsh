import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 bg-emerald-900 text-white">
          <h2 className="text-2xl font-bold font-serif">{data.name}</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-emerald-800 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          <p className="text-gray-600 italic text-lg">{data.short_desc}</p>
          
          <div className="space-y-8">
            {data.details.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;