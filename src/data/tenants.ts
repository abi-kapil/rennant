export interface Tenant {
  id: number;
  fullName: string;
  image: string;
  rentalArea: string;
  salaryRange: string;
  creditScoreRange: string;
  lengthOfRent: string;
  age: number;
  pets: boolean;
  idVerified: boolean;
  rennantScore: number;
  likedProperties: number[];
  savedProperties: number[];
}

export const tenants: Tenant[] = [
  {
    id: 1,
    fullName: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    rentalArea: "San Francisco, CA",
    salaryRange: "$80,000 - $100,000",
    creditScoreRange: "720 - 780",
    lengthOfRent: "12 months",
    age: 28,
    pets: false,
    idVerified: true,
    rennantScore: 92,
    likedProperties: [1, 3, 6],
    savedProperties: [2, 5],
  },
  {
    id: 2,
    fullName: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    rentalArea: "Austin, TX",
    salaryRange: "$60,000 - $80,000",
    creditScoreRange: "680 - 720",
    lengthOfRent: "6 months",
    age: 32,
    pets: true,
    idVerified: true,
    rennantScore: 85,
    likedProperties: [2, 4, 8],
    savedProperties: [1, 7, 9],
  },
  {
    id: 3,
    fullName: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    rentalArea: "Denver, CO",
    salaryRange: "$70,000 - $90,000",
    creditScoreRange: "750 - 800",
    lengthOfRent: "24 months",
    age: 35,
    pets: true,
    idVerified: true,
    rennantScore: 95,
    likedProperties: [5, 9, 10],
    savedProperties: [3, 6, 8],
  },
];
