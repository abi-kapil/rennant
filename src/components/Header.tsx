"use client";

import Link from "next/link";
import { Home, Building2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Properties */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-7 h-7 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">Rennant</span>
            </Link>
            <Link
              href="/properties"
              className="hidden sm:flex items-center gap-1 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Building2 className="w-4 h-4" />
              <span>Properties</span>
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/auth/signin"
              className="text-gray-600 hover:text-emerald-600 transition-colors px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden pb-4 border-t">
            <div className="flex flex-col gap-2 pt-3">
              <Link
                href="/properties"
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded"
                onClick={() => setMenuOpen(false)}
              >
                <Building2 className="w-4 h-4" />
                Properties
              </Link>
              <Link
                href="/auth/signin"
                className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="px-3 py-2 bg-emerald-600 text-white rounded text-center"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
