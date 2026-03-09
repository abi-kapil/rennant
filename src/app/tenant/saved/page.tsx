"use client";

import { useState, useMemo } from "react";
import { properties } from "@/data/properties";
import { tenants } from "@/data/tenants";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";

const tenant = tenants[0];

export default function TenantSavedPage() {
  const [savedIds, setSavedIds] = useState(tenant.savedProperties);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [bedsFilter, setBedsFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const savedProperties = properties.filter((p) => savedIds.includes(p.id));
  const cities = useMemo(
    () => [...new Set(savedProperties.map((p) => p.city))].sort(),
    [savedProperties]
  );

  const filtered = useMemo(() => {
    let result = [...savedProperties];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.city.toLowerCase().includes(query) ||
          p.area.toLowerCase().includes(query)
      );
    }

    if (cityFilter) result = result.filter((p) => p.city === cityFilter);

    if (bedsFilter) {
      const beds = parseInt(bedsFilter);
      result = beds === 4
        ? result.filter((p) => p.beds >= 4)
        : result.filter((p) => p.beds === beds);
    }

    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "beds-desc": result.sort((a, b) => b.beds - a.beds); break;
      case "date-asc": result.sort((a, b) => new Date(a.rentalStartDate).getTime() - new Date(b.rentalStartDate).getTime()); break;
    }

    return result;
  }, [savedProperties, searchQuery, sortBy, bedsFilter, cityFilter]);

  const handleRemove = (id: number) => {
    setSavedIds((prev) => prev.filter((pid) => pid !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Saved Properties
      </h2>

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

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-500 bg-white rounded-xl shadow-sm">
          No saved properties yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              removable
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
}
