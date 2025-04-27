'use client';

import { format, parseISO } from 'date-fns';
import { Event, upcomingEvents } from './events';
import { useEffect, useState } from 'react';

interface EventListProps {
  limit?: number;
}

// This helper component handles date formatting only on the client
function ClientOnlyFormattedDate({ date }: { date: string }) {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    setFormattedDate(format(parseISO(date), 'MMMM dd, yyyy'));
  }, [date]);

  return <span className="font-semibold">{formattedDate}</span>;
}

export function EventList({ limit = 3 }: EventListProps) {
  const events = limit ? upcomingEvents.slice(0, limit) : upcomingEvents;
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <div className="space-y-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} mounted={mounted} />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event, mounted }: { event: Event; mounted: boolean }) {
  const Icon = event.icon;
  
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
          <div className="text-sm">
            {mounted ? (
              <ClientOnlyFormattedDate date={event.date} />
            ) : (
              <span className="font-semibold opacity-0">Date Loading</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 