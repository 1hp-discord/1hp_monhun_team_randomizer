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
                
                <div className="mt-8 border-t-2 border-[#b38a49] pt-8">
                    <h2 className="text-2xl font-medium text-[#f9d877] mb-6 flex items-center">
                        <span className="mr-3 bg-[#b38a49] text-black rounded-full w-8 h-8 flex items-center justify-center">⚔️</span>
                        Create Your Squad
                    </h2>
                    
                    <div className="mb-8">
                        <h3 className="text-lg text-[#f9d877] mb-2">Squad Instructions:</h3>
                        <ul className="list-disc pl-5 text-[#e6d2a8] space-y-2 mb-6">
                            <li>Add all participating hunters to the registration</li>
                            <li>Specify weapon type, role and platform for each</li>
                            <li>Mark hunters who can record gameplay</li>
                            <li>Click "Generate Teams" to create random balanced teams</li>
                        </ul>
                        
                        <TeamGenerator />
                    </div>
                </div>
            </div>
        </div>
    );
}