'use client';

import { HeroBanner } from '@/components/hero/hero-banner';
import { TeamGenerator } from '@/components/team/team-generator';
import { EventList } from '@/components/events/event-list';

export default function Home() {
  return (
    <div className="p-6 md:p-10">
      <div className="mx-auto max-w-4xl">
        <HeroBanner 
          title="Monster Hunter Assistant" 
          subtitle="Generate random teams, follow events, and join the hunt!"
        />
        
        <div className="lg:col-span-2">
          <EventList limit={3} />
        </div>
      </div>
    </div>
  );
}
