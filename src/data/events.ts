export interface EventPhoto {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export type ParticipationType =
  | "Attendee"
  | "Speaker"
  | "Sponsor"
  | "Panelist"
  | "Exhibitor";

export interface IndustryEvent {
  slug: string;
  name: string;
  year: number;
  location: string;
  participation: ParticipationType;
  category: string;
  description: string;
  detailedOverview?: string;
  coverImage: EventPhoto;
  photos: EventPhoto[];
  date?: string;
  organizer?: string;
  published: boolean;
}

export const events: IndustryEvent[] = [
  {
    slug: "ahrefs-evolve-singapore-2026",
    name: "Ahrefs Evolve Singapore",
    year: 2026,
    location: "Singapore",
    participation: "Attendee",
    category: "SEO & Search Marketing",
    description:
      "Moments from Ahrefs Evolve Singapore, connecting with ideas and developments across the search industry.",
    detailedOverview:
      "FyrnMedia attended Ahrefs Evolve Singapore, engaging directly with search practitioners, engineering leads, and toolmakers on the evolving landscape of organic discovery, generative answer systems, and modern search intelligence.",
    date: "2026-10-12",
    organizer: "Ahrefs",
    published: true,
    coverImage: {
      id: "singapore-backdrop",
      src: "/images/events/ahrefs-evolve-singapore-2026/ahrefs-evolve-backdrop.jpg",
      alt: "Aditya Bhatt at the Ahrefs Evolve Singapore conference backdrop",
      width: 960,
      height: 1280,
      caption: "Conference backdrop at Ahrefs Evolve Singapore",
    },
    photos: [
      {
        id: "singapore-backdrop",
        src: "/images/events/ahrefs-evolve-singapore-2026/ahrefs-evolve-backdrop.jpg",
        alt: "Aditya Bhatt at the Ahrefs Evolve Singapore conference backdrop",
        width: 960,
        height: 1280,
        caption: "At the Ahrefs Evolve Singapore entrance backdrop",
      },
      {
        id: "singapore-attendee-group",
        src: "/images/events/ahrefs-evolve-singapore-2026/ahrefs-evolve-attendee-group.jpg",
        alt: "Conference attendees and industry colleagues networking at Ahrefs Evolve Singapore",
        width: 1280,
        height: 960,
        caption: "Connecting with attendees and industry peers in the exhibition hall",
      },
      {
        id: "singapore-networking",
        src: "/images/events/ahrefs-evolve-singapore-2026/ahrefs-evolve-networking.jpg",
        alt: "Aditya Bhatt and conference peers at the Ahrefs Evolve Singapore networking reception",
        width: 960,
        height: 1280,
        caption: "Industry discussion during the conference reception",
      },
      {
        id: "singapore-tim-soulo",
        src: "/images/events/ahrefs-evolve-singapore-2026/ahrefs-evolve-tim-soulo.jpg",
        alt: "Tim Soulo and Aditya Bhatt at an exhibition booth during Ahrefs Evolve Singapore",
        width: 960,
        height: 1280,
        caption: "Conversation with Tim Soulo at the partner exhibition area",
      },
      {
        id: "singapore-speaker-stage",
        src: "/images/events/ahrefs-evolve-singapore-2026/ahrefs-evolve-speaker-stage.jpg",
        alt: "Main stage presentation and speaker acknowledgment session at Ahrefs Evolve Singapore",
        width: 1280,
        height: 960,
        caption: "Main stage presentation acknowledging conference speakers",
      },
      {
        id: "singapore-attendee-badge",
        src: "/images/events/ahrefs-evolve-singapore-2026/ahrefs-evolve-attendee-badge.jpg",
        alt: "Ahrefs Evolve Singapore attendee badge inside the conference keynote hall",
        width: 960,
        height: 1280,
        caption: "Attendee badge inside the keynote hall before session kickoff",
      },
    ],
  },
];

export function getPublishedEvents(): IndustryEvent[] {
  return events.filter((event) => event.published);
}

export function getEventBySlug(slug: string): IndustryEvent | undefined {
  return events.find((event) => event.slug === slug && event.published);
}
