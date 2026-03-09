import { landlords } from "@/data/landlords";
import { Building2, Home, Star } from "lucide-react";

const landlord = landlords[0];

export default function LandlordProfilePage() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-500 block mb-1">Full Name</label>
          <p className="text-gray-900 text-lg">{landlord.fullName}</p>
        </div>

        <div>
          <label className="text-sm text-gray-500 block mb-1">
            Rennant Score
          </label>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
              <span className="text-emerald-700 font-bold text-lg">
                {landlord.rennantScore}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(landlord.rennantScore / 20)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="w-5 h-5 text-emerald-600" />
            <label className="text-sm text-gray-600 font-medium">
              Properties for Rent
            </label>
          </div>
          <p className="text-3xl font-bold text-emerald-700">
            {landlord.propertiesForRent}
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <Home className="w-5 h-5 text-blue-600" />
            <label className="text-sm text-gray-600 font-medium">
              Properties Rented Out
            </label>
          </div>
          <p className="text-3xl font-bold text-blue-700">
            {landlord.propertiesRentedOut}
          </p>
        </div>
      </div>
    </div>
  );
}
