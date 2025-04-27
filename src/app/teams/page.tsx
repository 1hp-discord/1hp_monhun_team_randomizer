'use client';

import { TeamGenerator } from "@/components/team/team-generator";
import { HeroBanner } from "@/components/hero/hero-banner";

export default function TeamsPage() {
    return (
        <div className="p-6 md:p-10">
            <div className="mx-auto max-w-5xl">
                <HeroBanner 
                    title="Team Builder" 
                    subtitle="Register hunters and generate random teams for your challenges"
                />
                
                <TeamGenerator />
            </div>
        </div>
    );
}