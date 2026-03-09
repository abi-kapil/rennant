"use client";

import { useState, useMemo } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [bedsFilter, setBedsFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const cities = useMemo(
    () => [...new Set(properties.map((p) => p.city))].sort(),
    []
  );

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.city.toLowerCase().includes(query) ||
          p.area.toLowerCase().includes(query) ||
          p.type.toLowerCase().includes(query)
      );
    }

    // Filter by city
    if (cityFilter) {
      result = result.filter((p) => p.city === cityFilter);
    }

    // Filter by beds
    if (bedsFilter) {
      const beds = parseInt(bedsFilter);
      if (beds === 4) {
        result = result.filter((p) => p.beds >= 4);
      } else {
        result = result.filter((p) => p.beds === beds);
      }
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "beds-desc":
        result.sort((a, b) => b.beds - a.beds);
        break;
      case "date-asc":
        result.sort(
          (a, b) =>
            new Date(a.rentalStartDate).getTime() -
            new Date(b.rentalStartDate).getTime()
        );
        break;
    }

    return result;
  }, [searchQuery, sortBy, bedsFilter, cityFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Browse Properties
      </h1>

      <SearchFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        bedsFilter={bedsFilter}
        onBedsFilterChange={setBedsFilter}
        cityFilter={cityFilter}
        onCityFilterChange={setCityFilter}
        cities={cities}
      />

      {filteredProperties.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No properties match your filters. Try adjusting your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
