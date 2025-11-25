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
    price: "$280 / week",
    image: "/images/legal-group.jpeg", 
    description: "Work alongside specialized NGOs and law firms focusing on women's rights, land disputes, and family law.",
    highlights: ["Legal Research and Writing", "Court Observations", "Legal Aid Outreach", "Human Rights Advocacy"],
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
    price: "$280 / week",
    image: "/images/medical-surgery.jpg",
    description: "Join a high-volume regional hospital. Shadow specialists in Triage, Surgery, Pediatrics, and Maternity.",
    highlights: ["Clinical Rotations", "Community Health Outreach", "Public Health Education", "Patient Care"],
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
    price: "$280 / week",
    image: "/images/social-work-award.jpg",
    description: "Support vulnerable populations through education, childcare, and women's empowerment initiatives.",
    highlights: ["Casework Support", "Child Welfare", "Youth Development", "Community Outreach"],
    itinerary: [
      { title: "Daily", desc: "Morning: School/Center Support. Afternoon: Home Visits & Reports." }
    ]
  },
  {
    id: "vol-tz",
    slug: "volunteering-tanzania-mainland",
    title: "Volunteering in Tanzania Mainland",
    category: "Volunteering",
    location: "Tanzania",
    price: "$280 / week",
    image: "/images/tanzania-elephant.jpg",
    description: "A comprehensive program for living and working in mainland Tanzania. Explore meaningful work placements and cultural immersion.",
    highlights: ["Meaningful Work Placements", "Cultural Immersion", "Safari Opportunities", "24/7 Support"],
    itinerary: [
      { title: "Overview", desc: "Community development and cultural exchange." }
    ]
  },
  {
    id: "vol-zan",
    slug: "volunteering-zanzibar",
    title: "Volunteering in Zanzibar",
    category: "Volunteering",
    location: "Zanzibar",
    price: "$280 / week",
    image: "/images/zanzibar-beach.jpg",
    description: "Experience the rich Swahili culture and beautiful environment of Zanzibar while contributing to marine conservation or education.",
    highlights: ["Marine Conservation", "Stone Town History", "Snorkeling", "Community Engagement"],
    itinerary: [
      { title: "Overview", desc: "Island life and community projects." }
    ]
  }
];