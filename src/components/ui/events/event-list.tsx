'use client';

import { format } from 'date-fns';
import { Event, upcomingEvents } from './events';

interface EventListProps {
  limit?: number;
}

export function EventList({ limit = 3 }: EventListProps) {
  const events = limit ? upcomingEvents.slice(0, limit) : upcomingEvents;
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <div className="space-y-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  const Icon = event.icon;
  const eventDate = new Date(event.date);
  const formattedDate = format(eventDate, 'MMMM dd, yyyy');
  const formattedTime = format(eventDate, 'h:mm a');
  
  // Different background colors based on event type
  const getBgColor = () => {
    switch(event.type) {
      case 'hunt': return 'bg-blue-100 dark:bg-blue-950 border-blue-200 dark:border-blue-900';
      case 'tournament': return 'bg-amber-100 dark:bg-amber-950 border-amber-200 dark:border-amber-900';
      case 'special': return 'bg-purple-100 dark:bg-purple-950 border-purple-200 dark:border-purple-900';
      default: return 'bg-card';
    }
  };
  
  return (
    <div className={`p-4 rounded-lg border ${getBgColor()} transition-all hover:shadow-md`}>
      <div className="flex items-start gap-3">
        <div className="p-2 bg-background rounded-full shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{event.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">{formattedDate}</span>
            <span>at</span>
            <span>{formattedTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 