import React from 'react';
import { Map, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = ({ info }) => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${info.coordinates.lat},${info.coordinates.long}`;

  return (
    <footer id="contact" className="bg-emerald-950 text-emerald-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Company Details */}
          <div>
            <h2 className="text-3xl font-bold font-serif mb-6 text-white">
              {info.name}
            </h2>

            <p className="mb-8 text-emerald-200 text-lg italic">
              {info.tagline}
            </p>

            <div className="space-y-4">

              {/* Phone */}
              <a
                href={`tel:${info.phone}`}
                className="flex items-center gap-3 hover:text-amber-500 transition-colors"
              >
                <div className="bg-emerald-900 p-2 rounded-lg">
                  <Phone size={20} className="text-amber-500" />
                </div>
                <span>{info.phone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${info.email}`}
                className="flex items-center gap-3 hover:text-amber-500 transition-colors"
              >
                <div className="bg-emerald-900 p-2 rounded-lg">
                  <Mail size={20} className="text-amber-500" />
                </div>
                <span>{info.email}</span>
              </a>

              {/* Address / Map */}
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-amber-500 transition-colors"
              >
                <div className="bg-emerald-900 p-2 rounded-lg">
                  <Map size={20} className="text-amber-500" />
                </div>
                <span>{info.address}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a
                href={info?.social_links?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors"
                title="Instagram"
              >
                <Instagram />
              </a>

              <a
                href={info?.social_links?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors"
                title="Facebook"
              >
                <Facebook />
              </a>

              <a
                href={`https://wa.me/${info?.social_links?.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-emerald-900 rounded-2xl p-8 text-center shadow-inner">
            <h3 className="text-xl font-bold mb-4 text-white">
              Visit Our Office
            </h3>

            <p className="mb-6 text-emerald-200">
              {info.location_desc}
            </p>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-48 rounded-xl mb-6 overflow-hidden relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600"
                className="opacity-60 w-full h-full object-cover group-hover:scale-105 transition-transform"
                alt="Map"
              />
              <MapPinIcon
                className="absolute inset-0 m-auto text-amber-500 animate-bounce"
                size={32}
              />
            </a>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors"
            >
              View Location on Google Maps
            </a>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-sm text-emerald-400">
          © {new Date().getFullYear()} {info.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const MapPinIcon = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default Footer;
