"use client";

import ProfileSidebar from "@/components/ProfileSidebar";
import { landlords } from "@/data/landlords";

const landlord = landlords[0];

const navItems = [
  { label: "Personal Information", href: "/landlord" },
  { label: "Properties Rented", href: "/landlord/rented" },
  { label: "Messages / Requests", href: "/landlord/messages" },
];

export default function LandlordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <ProfileSidebar
          image={landlord.image}
          name={landlord.fullName}
          subtitle={`${landlord.propertiesForRent} properties for rent`}
          navItems={navItems}
        />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
