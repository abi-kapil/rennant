"use client";

import { useState } from "react";
import { Bed, Bath, ChevronLeft, ChevronRight, X, Calendar, Maximize2 } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  removable?: boolean;
  onRemove?: (id: number) => void;
}

export default function PropertyCard({ property, removable, onRemove }: PropertyCardProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative group">
      {/* Remove Button */}
      {removable && onRemove && (
        <button
          onClick={() => onRemove(property.id)}
          className="absolute top-3 right-3 z-10 bg-white/90 rounded-full p-1.5 hover:bg-red-50 transition-colors"
        >
          <X className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
      )}

      {/* Image Carousel */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={property.images[imageIndex]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {property.images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i === imageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Details */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-semibold text-gray-900 text-sm">{property.title}</h3>
          <span className="text-emerald-600 font-bold text-sm whitespace-nowrap ml-2">
            ${property.price.toLocaleString()}/mo
          </span>
        </div>

        <p className="text-gray-500 text-xs mb-3">
          {property.area}, {property.city}
        </p>

        <div className="flex items-center gap-4 text-gray-600 text-xs">
          <span className="flex items-center gap-1">
            <Maximize2 className="w-3.5 h-3.5" />
            {property.size}
          </span>
          <span className="flex items-center gap-1">
            <Bed className="w-3.5 h-3.5" />
            {property.beds} {property.beds === 1 ? "bed" : "beds"}
          </span>
          <span className="flex items-center gap-1">
            <Bath className="w-3.5 h-3.5" />
            {property.baths} {property.baths === 1 ? "bath" : "baths"}
          </span>
        </div>

        <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs">
          <Calendar className="w-3 h-3" />
          <span>Available {new Date(property.rentalStartDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        </div>
      </div>
    </div>
  );
}
