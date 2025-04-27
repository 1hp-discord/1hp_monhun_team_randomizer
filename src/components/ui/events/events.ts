import { Calendar, Users, Swords } from "lucide-react";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: any;
  type: 'hunt' | 'tournament' | 'special';
}

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "1HP Arch Tempered Rey Dau Duos",
    description: "Join us for our challenge on the 29th of April. Arch Tempered Rey Dau Duos!",
    date: "2025-04-29T00:00:00Z",
    icon: Users,
    type: "hunt"
  },
]; 