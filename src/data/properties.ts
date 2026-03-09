export interface Property {
  id: number;
  title: string;
  images: string[];
  size: string;
  city: string;
  area: string;
  rentalStartDate: string;
  beds: number;
  baths: number;
  price: number;
  type: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    ],
    size: "850 sq ft",
    city: "San Francisco",
    area: "Financial District",
    rentalStartDate: "2026-04-01",
    beds: 2,
    baths: 1,
    price: 3200,
    type: "Apartment",
  },
  {
    id: 2,
    title: "Cozy Suburban Home",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=400&fit=crop",
    ],
    size: "1,400 sq ft",
    city: "Austin",
    area: "Round Rock",
    rentalStartDate: "2026-05-15",
    beds: 3,
    baths: 2,
    price: 2100,
    type: "House",
  },
  {
    id: 3,
    title: "Luxury Penthouse Suite",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    ],
    size: "2,200 sq ft",
    city: "New York",
    area: "Manhattan",
    rentalStartDate: "2026-04-15",
    beds: 4,
    baths: 3,
    price: 8500,
    type: "Penthouse",
  },
  {
    id: 4,
    title: "Charming Studio Loft",
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop",
    ],
    size: "500 sq ft",
    city: "Portland",
    area: "Pearl District",
    rentalStartDate: "2026-03-20",
    beds: 1,
    baths: 1,
    price: 1450,
    type: "Studio",
  },
  {
    id: 5,
    title: "Family Friendly Duplex",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop",
    ],
    size: "1,800 sq ft",
    city: "Denver",
    area: "Capitol Hill",
    rentalStartDate: "2026-06-01",
    beds: 3,
    baths: 2,
    price: 2800,
    type: "Duplex",
  },
  {
    id: 6,
    title: "Beachside Cottage",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop",
    ],
    size: "1,100 sq ft",
    city: "San Diego",
    area: "Pacific Beach",
    rentalStartDate: "2026-05-01",
    beds: 2,
    baths: 2,
    price: 3500,
    type: "Cottage",
  },
  {
    id: 7,
    title: "Urban Micro Apartment",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&h=400&fit=crop",
    ],
    size: "400 sq ft",
    city: "Seattle",
    area: "Capitol Hill",
    rentalStartDate: "2026-04-10",
    beds: 1,
    baths: 1,
    price: 1600,
    type: "Apartment",
  },
  {
    id: 8,
    title: "Spacious Ranch Home",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop",
    ],
    size: "2,500 sq ft",
    city: "Nashville",
    area: "East Nashville",
    rentalStartDate: "2026-07-01",
    beds: 4,
    baths: 3,
    price: 3200,
    type: "House",
  },
  {
    id: 9,
    title: "Trendy Warehouse Conversion",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    ],
    size: "1,200 sq ft",
    city: "Chicago",
    area: "Wicker Park",
    rentalStartDate: "2026-04-20",
    beds: 2,
    baths: 1,
    price: 2400,
    type: "Loft",
  },
  {
    id: 10,
    title: "Garden Level Suite",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop",
    ],
    size: "750 sq ft",
    city: "Boston",
    area: "Back Bay",
    rentalStartDate: "2026-05-15",
    beds: 1,
    baths: 1,
    price: 2000,
    type: "Apartment",
  },
];
