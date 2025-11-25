export interface Program {
      id: string;
      slug: string;
      title: string;
      category: "Medical" | "Legal" | "Social Work" | "Education";
      location: "Arusha" | "Zanzibar" | "Both";
      price: string;
      description: string;
      highlights: string[];
      itinerary: { title: string; desc: string }[];
      image: string;
    }

    export const programs: Program[] = [
      {
        id: "med-01",
        slug: "medical-nursing-internship",
        title: "Medical & Nursing Internship",
        category: "Medical",
        location: "Arusha",
        price: "$500 / week",
        image: "/images/medical-hero.jpg",
        description: "Join a high-volume regional hospital in Arusha. Shadow specialists in Triage, Surgery, Pediatrics, and Maternity. Ideal for pre-med, nursing students, and qualified professionals looking to understand healthcare in developing nations.",
        highlights: [
          "Rotations in Surgery, Pediatrics, and Maternity",
          "Direct mentorship from Tanzanian MDs",
          "Assistance with Class C Volunteer Visa",
          "Airport pickup & 24/7 Support"
        ],
        itinerary: [
          { title: "Week 1: Orientation & Triage", desc: "Introduction to Swahili medical terms, hospital safety protocols, and shadowing in the outpatient department." },
          { title: "Week 2-3: Rotations", desc: "Move between wards. Observe surgeries and assist with basic patient care under supervision." },
          { title: "Week 4: Outreach", desc: "Participate in a rural medical outreach clinic providing checkups to remote villages." }
        ]
      },
      {
        id: "leg-01",
        slug: "legal-human-rights",
        title: "Legal & Human Rights Advocacy",
        category: "Legal",
        location: "Arusha",
        price: "$450 / week",
        image: "/images/legal-hero.jpg",
        description: "Work alongside specialized NGOs and law firms focusing on women's rights, land disputes, and family law. Gain insight into the Tanzanian legal system and international human rights applications.",
        highlights: [
          "Work with local NGOs & Law Firms",
          "Attend court sessions (High Court & Resident Magistrate)",
          "Draft legal documents & research briefs",
          "Community sensitization workshops"
        ],
        itinerary: [
          { title: "Week 1: Legal System Overview", desc: "Briefing on the Tanzanian Constitution and current human rights challenges." },
          { title: "Week 2-4: Case Work", desc: "Assist lawyers with case files, interview clients (with translators), and attend court hearings." }
        ]
      },
      {
        id: "soc-01",
        slug: "social-work-community",
        title: "Social Work & Community Development",
        category: "Social Work",
        location: "Arusha",
        price: "$400 / week",
        image: "/images/social-hero.jpg",
        description: "Support vulnerable populations through education, childcare, and women's empowerment initiatives. This placement is hands-on and requires a high level of empathy and cultural sensitivity.",
        highlights: [
          "Orphanage & Daycare Support",
          "Women's Economic Empowerment Groups",
          "Teaching English & Math basics",
          "Home visits with social workers"
        ],
        itinerary: [
          { title: "Daily Routine", desc: "Mornings: Education support at local schools. Afternoons: Community outreach or women's group facilitation." }
        ]
      }
    ];