import { HeroBanner } from '@/components/ui/hero/hero-banner';
import { TeamGenerator } from '@/components/ui/team/team-generator';
import { EventList } from '@/components/ui/events/event-list';

export default function Home() {
  return (
    <div className="p-6 md:p-10">
      <div className="mx-auto max-w-4xl">
        <HeroBanner 
          title="1HP Monster Hunter Team Randomizer" 
          subtitle="Generate random teams, follow events, and join the hunt!"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          <div className="lg:col-span-3">
            <TeamGenerator />
          </div>
          
          <div className="lg:col-span-2">
            <EventList limit={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
