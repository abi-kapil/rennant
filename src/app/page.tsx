import Link from "next/link";
import { Building2, Users, Shield, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop"
          alt="Beautiful home with family on the porch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Find Your Perfect Rental Home
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Rennant connects tenants and landlords for a seamless rental
                experience. Browse properties, communicate directly, and find
                your next home.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/properties"
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  Browse Properties
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/30"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Rennant?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Building2 className="w-8 h-8 text-emerald-600" />}
              title="Quality Listings"
              description="Browse verified rental properties with detailed information and photos."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-emerald-600" />}
              title="Direct Communication"
              description="Message landlords and tenants directly through our platform."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-emerald-600" />}
              title="Verified Profiles"
              description="ID verification and Rennant scoring for trusted interactions."
            />
            <FeatureCard
              icon={<Star className="w-8 h-8 text-emerald-600" />}
              title="Rate & Review"
              description="Rate your experience to help the community make informed decisions."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Next Home?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of tenants and landlords already using Rennant to
            simplify their rental experience.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Sign Up Today
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
