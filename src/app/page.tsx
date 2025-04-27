'use client';

import { HeroBanner } from '@/components/hero/hero-banner';
import { TeamGenerator } from '@/components/team/team-generator';
import { EventList } from '@/components/events/event-list';

export default function Home() {
  return (
    <div className="p-6 md:p-10 bg-[#1a1a1a] min-h-screen">
      <div className="mx-auto max-w-4xl">
        <HeroBanner 
          title="Monster Hunter Assistant" 
          subtitle="Generate random teams, follow events, and join the hunt!"
        />
        
        <div className="mt-8 border-t-2 border-[#b38a49] pt-8">
          <h2 className="text-2xl font-medium text-[#f9d877] mb-6 flex items-center">
            <span className="mr-3">🔥</span>
            Upcoming Events
          </h2>
          <div className="lg:col-span-2">
            <EventList limit={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
