'use client';

import { TeamGenerator } from "@/components/team/team-generator";
import { HeroBanner } from "@/components/hero/hero-banner";

export default function TeamsPage() {
    return (
        <div className="p-6 md:p-10 bg-[#1a1a1a] min-h-screen">
            <div className="mx-auto max-w-5xl">
                <HeroBanner 
                    title="Team Builder" 
                    subtitle="Register hunters and generate random teams for your challenges"
                />
                
                <div className="mt-8 border-t-2 border-[#b38a49] pt-8">
                    <h2 className="text-2xl font-medium text-[#f9d877] mb-6 flex items-center">
                        <span className="mr-3">⚔️</span>
                        Create Your Squad
                    </h2>
                    <TeamGenerator />
                </div>
            </div>
        </div>
    );
}