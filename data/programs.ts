export interface Program {
  id: string;
  slug: string;
  title: string;
  category: "Medical" | "Legal" | "Social Work" | "Volunteering";
  location: "Arusha" | "Zanzibar" | "Tanzania";
  price: string;
  description: string;
  highlights: string[];
  itinerary: { title: string; desc: string }[];
  image: string;
}

export const programs: Program[] = [
  {
    id: "leg-01",
    slug: "legal-human-rights",
    title: "Legal and Human Rights Internship & Volunteer Programme",
    category: "Legal",
    location: "Arusha",
    price: "$450 / week",
    image: "/images/legal-group.jpg", // Matches screenshot of group
    description: "The Legal and Human Rights Internship & Volunteer Programme at Intern Africa offers aspiring lawyers, legal students, human rights advocates, and social justice enthusiasts a unique opportunity to gain practical experience in the field of law, advocacy, and community empowerment across Africa.",
    highlights: [
      "Legal Research and Writing",
      "Court Observations and Case Management",
      "Legal Aid and Community Outreach",
      "Human Rights Advocacy"
    ],
    itinerary: [
      { title: "Week 1", desc: "Legal System Overview & Constitution Briefing" },
      { title: "Week 2-4", desc: "Case Work, Client Interviews, and Court Sessions" }
    ]
  },
  {
    id: "med-01",
    slug: "medical-nursing-internship",
    title: "Medical Internship & Volunteer Programme for Doctors and Nurses",
    category: "Medical",
    location: "Arusha",
    price: "$500 / week",
    image: "/images/medical-surgery.jpg", // Matches surgery image
    description: "The Medical Internship & Volunteer Programme at Intern Africa provides an enriching and impactful opportunity for medical students, graduates, nurses, and healthcare professionals to gain hands-on experience in various healthcare settings across Africa.",
    highlights: [
      "Clinical Rotations (Surgery, Pediatrics, Maternity)",
      "Community Health Outreach",
      "Public Health Education",
      "Patient Care and Observation"
    ],
    itinerary: [
      { title: "Week 1", desc: "Hospital Orientation & Swahili Medical Terms" },
      { title: "Week 2-4", desc: "Departmental Rotations & Rural Outreach" }
    ]
  },
  {
    id: "soc-01",
    slug: "social-work-community",
    title: "Social Work Internship & Volunteer Programme",
    category: "Social Work",
    location: "Arusha",
    price: "$400 / week",
    image: "/images/social-work-award.jpg", // Matches award image
    description: "The Social Work Internship & Volunteer Programme by Intern Africa provides a meaningful opportunity for students, graduates, and professionals in social work and related fields to gain hands-on experience in community-based development and care services across Africa.",
    highlights: [
      "Casework and Counselling Support",
      "Child Welfare and Protection",
      "Youth Development Initiatives",
      "Community Outreach and Empowerment"
    ],
    itinerary: [
      { title: "Daily", desc: "Morning: School/Center Support. Afternoon: Home Visits & Reports." }
    ]
  },
  {
    id: "vol-tz",
    slug: "volunteering-tanzania-mainland",
    title: "What to Expect from Intern Africa’s Volunteering in Tanzania Mainland",
    category: "Volunteering",
    location: "Tanzania",
    price: "Free Guide",
    image: "/images/tanzania-elephant.jpg", // Matches elephant image
    description: "A comprehensive guide to living and working in mainland Tanzania. Explore meaningful work placements, cultural immersion, and adventure in a country known for its stunning landscapes and welcoming people.",
    highlights: [
      "Meaningful Work Placements",
      "Cultural Immersion & Language Learning",
      "Safari & Adventure Opportunities",
      "24/7 Support and Guidance"
    ],
    itinerary: [
      { title: "Overview", desc: "Everything you need to know before you arrive." }
    ]
  },
  {
    id: "vol-zan",
    slug: "volunteering-zanzibar",
    title: "What to Expect from Intern Africa’s Volunteering in Zanzibar",
    category: "Volunteering",
    location: "Zanzibar",
    price: "Free Guide",
    image: "/images/zanzibar-beach.jpg", // Matches beach image
    description: "Experience the rich Swahili culture and beautiful environment of Zanzibar. This program offers diverse opportunities in marine conservation, education, and healthcare on a picturesque island.",
    highlights: [
      "Marine Conservation Projects",
      "Island Culture and Stone Town History",
      "Snorkeling & Dhow Cruises",
      "Community Engagement"
    ],
    itinerary: [
      { title: "Overview", desc: "Your guide to island life and logistics." }
    ]
  }
];