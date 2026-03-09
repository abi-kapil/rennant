"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

interface ProfileSidebarProps {
  image: string;
  name: string;
  subtitle: string;
  navItems: NavItem[];
}

export default function ProfileSidebar({ image, name, subtitle, navItems }: ProfileSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="bg-white rounded-xl shadow-sm p-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-emerald-100"
          />
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
