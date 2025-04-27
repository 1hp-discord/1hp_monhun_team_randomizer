'use client';

import { HeroBanner } from '@/components/hero/hero-banner';
import { EventList } from '@/components/events/event-list';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="p-6 md:p-10">
      <div className="mx-auto max-w-4xl">
        <HeroBanner 
          title="Monster Hunter Assistant" 
          subtitle="Generate random teams, follow events, and join the hunt!"
        />
        
        <div className="mt-8 pt-4">
          <h2 className="text-2xl font-medium text-[#f9d877] mb-6 flex items-center">
            <span className="mr-3 bg-[#b38a49] text-black rounded-full w-8 h-8 flex items-center justify-center">🔥</span>
            Upcoming Events
          </h2>
          <Card>
            <CardContent className="pt-6">
              <EventList limit={3} />
            </CardContent>
          </Card>
          
          <div className="mt-10 flex justify-center">
            <a 
              href="/teams" 
              className="inline-flex items-center justify-center gap-2 bg-[#b38a49] text-black font-medium border border-[#f9d877] shadow-xs hover:bg-[#d4a85a] px-6 py-3 rounded-md"
            >
              <span>⚔️</span> Create Teams Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
