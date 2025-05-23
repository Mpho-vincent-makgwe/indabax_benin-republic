interface Event {
  id: string;
  title: string;
  location: string;
  date: Date | string;
  image: string;
  description: string;
  speakers?: string[];
  organisers?: string[];
  highlight?: string;
}

declare module '../BackEnd/data' {
  export const events: Event[];
  export const pastEvents: Event[];
  export const speakers: any[]; // Replace with proper interface if needed
  export const organisers: any[]; // Replace with proper interface if needed
  export const testimonials: any[]; // Replace with proper interface if needed
  export const leaders: any[]; // Replace with proper interface if needed
}