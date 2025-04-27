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
    id: "event-1",
    title: "1HP Squad Weekly Hunt",
    description: "Join us for our weekly hunt challenge. Monsters TBD, bring your favorite weapons!",
    date: "2023-10-25T19:00:00Z",
    icon: Users,
    type: "hunt"
  },
  {
    id: "event-2",
    title: "Monthly Tournament",
    description: "Compete in our monthly tournament. Single elimination, random weapon assignments.",
    date: "2023-10-30T18:00:00Z",
    icon: Swords,
    type: "tournament"
  },
  {
    id: "event-3",
    title: "Special Event: Halloween Hunt",
    description: "Special Halloween-themed hunt. Costume contest before the hunt!",
    date: "2023-10-31T20:00:00Z",
    icon: Calendar,
    type: "special"
  },
  {
    id: "event-4",
    title: "Newcomer Tutorial Session",
    description: "Introduction to the 1HP challenge for newcomers. Learn the rules and basic strategies.",
    date: "2023-11-05T17:00:00Z",
    icon: Users,
    type: "special"
  },
  {
    id: "event-5",
    title: "1HP Squad Weekly Hunt",
    description: "Weekly hunt challenge focusing on Elder Dragons.",
    date: "2023-11-08T19:00:00Z",
    icon: Users,
    type: "hunt"
  }
]; 