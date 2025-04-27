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

  return <span className="font-semibold text-[#f9d877]">{formattedDate}</span>;
}

export function EventList({ limit = 3 }: EventListProps) {
  const events = limit ? upcomingEvents.slice(0, limit) : upcomingEvents;
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} mounted={mounted} />
      ))}
    </div>
  );
}

function EventCard({ event, mounted }: { event: Event; mounted: boolean }) {
  const Icon = event.icon;
  
  // Monster Hunter themed event types
  const getEventStyle = () => {
    switch(event.type) {
      case 'hunt': 
        return {
          border: 'border-[#5177a6]',
          badge: 'bg-[#2e3d59] text-[#a8c7e6]',
          icon: 'bg-[#2a2319] border-[#5177a6]'
        };
      case 'tournament': 
        return {
          border: 'border-[#a69c51]',
          badge: 'bg-[#594e2e] text-[#e6d7a8]',
          icon: 'bg-[#2a2319] border-[#a69c51]'
        };
      case 'special': 
        return {
          border: 'border-[#a651a6]',
          badge: 'bg-[#592e59] text-[#e6a8e6]',
          icon: 'bg-[#2a2319] border-[#a651a6]'
        };
      default: 
        return {
          border: 'border-[#b38a49]',
          badge: 'bg-[#3d3424] text-[#e6d2a8]',
          icon: 'bg-[#2a2319] border-[#b38a49]'
        };
    }
  };
  
  const style = getEventStyle();
  
  return (
    <div className={`p-4 rounded-lg border-2 ${style.border} bg-[#2a2319] transition-all hover:shadow-md`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-full shrink-0 border ${style.icon} text-[#f9d877]`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-[#f9d877]">{event.title}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full ${style.badge}`}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </span>
          </div>
          <p className="text-sm text-[#e6d2a8] mb-2">{event.description}</p>
          <div className="text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1 text-[#b38a49]">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
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