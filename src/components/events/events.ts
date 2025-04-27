import { LucideIcon, Users } from "lucide-react";

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  type: 'hunt' | 'tournament' | 'special';
  icon: LucideIcon;
}

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "1HP Arch Tempered Rey Dau Duos",
    description: "Join us for our challenge on the 29th of April. Arch Tempered Rey Dau Duos!",
    date: "2025-04-29T00:00:00Z",
    icon: Users,
    type: "hunt"
  },
]; 