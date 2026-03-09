"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  bedsFilter: string;
  onBedsFilterChange: (beds: string) => void;
  cityFilter: string;
  onCityFilterChange: (city: string) => void;
  cities: string[];
}

export default function SearchFilters({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  bedsFilter,
  onBedsFilterChange,
  cityFilter,
  onCityFilterChange,
  cities,
}: SearchFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center gap-1">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
          </div>

          <select
            value={cityFilter}
            onChange={(e) => onCityFilterChange(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <select
            value={bedsFilter}
            onChange={(e) => onBedsFilterChange(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">All Beds</option>
            <option value="1">1 Bed</option>
            <option value="2">2 Beds</option>
            <option value="3">3 Beds</option>
            <option value="4">4+ Beds</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="beds-desc">Most Beds</option>
            <option value="date-asc">Earliest Available</option>
          </select>
        </div>
      </div>
    </div>
  );
}
