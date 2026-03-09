"use client";

import ProfileSidebar from "@/components/ProfileSidebar";
import { tenants } from "@/data/tenants";

const tenant = tenants[0];

const navItems = [
  { label: "Profile Information", href: "/tenant" },
  { label: "Properties You Like", href: "/tenant/liked" },
  { label: "Saved Properties", href: "/tenant/saved" },
  { label: "Messages", href: "/tenant/messages" },
];

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <ProfileSidebar
          image={tenant.image}
          name={tenant.fullName}
          subtitle={tenant.rentalArea}
          navItems={navItems}
        />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
