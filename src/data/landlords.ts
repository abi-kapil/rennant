export interface Landlord {
  id: number;
  fullName: string;
  image: string;
  propertiesForRent: number;
  propertiesRentedOut: number;
  rennantScore: number;
  rentedPropertyIds: number[];
}

export const landlords: Landlord[] = [
  {
    id: 1,
    fullName: "Robert Williams",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    propertiesForRent: 5,
    propertiesRentedOut: 3,
    rennantScore: 88,
    rentedPropertyIds: [1, 3, 6],
  },
  {
    id: 2,
    fullName: "Diana Patel",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    propertiesForRent: 8,
    propertiesRentedOut: 6,
    rennantScore: 94,
    rentedPropertyIds: [2, 4, 5, 7, 8, 9],
  },
  {
    id: 3,
    fullName: "James Foster",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    propertiesForRent: 3,
    propertiesRentedOut: 2,
    rennantScore: 79,
    rentedPropertyIds: [10, 4],
  },
];

export interface Message {
  id: number;
  from: string;
  fromImage: string;
  subject: string;
  preview: string;
  date: string;
  unread: boolean;
  hasAttachment: boolean;
}

export const messages: Message[] = [
  {
    id: 1,
    from: "Sarah Johnson",
    fromImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    subject: "Interested in Downtown Apartment",
    preview: "Hi, I saw your listing for the Modern Downtown Apartment and I'm very interested. Would it be possible to schedule a viewing this weekend?",
    date: "2026-03-07",
    unread: true,
    hasAttachment: false,
  },
  {
    id: 2,
    from: "Michael Chen",
    fromImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    subject: "Lease Agreement Question",
    preview: "Hello, I had a question about the lease terms for the Cozy Suburban Home. Is the lease flexible for 6 months?",
    date: "2026-03-06",
    unread: false,
    hasAttachment: true,
  },
  {
    id: 3,
    from: "Robert Williams",
    fromImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    subject: "Maintenance Request Update",
    preview: "The plumber has been scheduled for Tuesday between 10am-12pm. Please make sure someone is available to let them in.",
    date: "2026-03-05",
    unread: true,
    hasAttachment: false,
  },
  {
    id: 4,
    from: "Emily Rodriguez",
    fromImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    subject: "Application Documents",
    preview: "Please find attached my rental application documents including proof of income and references.",
    date: "2026-03-04",
    unread: false,
    hasAttachment: true,
  },
  {
    id: 5,
    from: "Diana Patel",
    fromImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    subject: "Welcome to your new home!",
    preview: "Congratulations! Your application has been approved. Here are the next steps for move-in day...",
    date: "2026-03-03",
    unread: false,
    hasAttachment: true,
  },
];
