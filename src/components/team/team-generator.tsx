'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TeamMember } from './types';
import { HunterForm } from './parts/hunter-form';
import { HunterList } from './parts/hunter-list';
import { TeamsDisplay } from './parts/teams-display';
import { createOptimalTeams, generateRandomHunters } from './utils/team-generator';

export function TeamGenerator() {
  const [teams, setTeams] = useState<TeamMember[][]>([]);
  const [hunters, setHunters] = useState<TeamMember[]>([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const addHunter = (newHunter: TeamMember) => {
    setHunters([...hunters, newHunter]);
  };
  
  const removeHunter = (id: number) => {
    setHunters(hunters.filter(hunter => hunter.id !== id));
  };
  
  const generateRandomTeam = () => {
    if (hunters.length === 0) {
      alert('Please add hunters first!');
      return;
    }
    
    // Create a copy of the hunters array to work with
    let allHunters = [...hunters];
    
    // If we have fewer than 2 hunters, add random hunters
    if (allHunters.length < 2) {
      const randomHunters = generateRandomHunters(2 - allHunters.length);
      allHunters = [...allHunters, ...randomHunters];
    }
    
    // Generate optimal teams
    const generatedTeams = createOptimalTeams(allHunters);
    setTeams(generatedTeams);
  };
  
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg w-full">
      <section>
        <HunterForm onAddHunter={addHunter} />
      </section>
      
      <section className="pt-6">
        <HunterList hunters={hunters} onRemoveHunter={removeHunter} />
      </section>
      
      <section className="pt-6">
        <h2 className="text-2xl font-medium text-[#f9d877] mb-4 flex items-center">
          <span className="bg-[#b38a49] text-black rounded-full w-7 h-7 flex items-center justify-center mr-2 text-sm">📋</span>
          1HP Squad Challenge
        </h2>
        <p className="mb-6 text-[#e6d2a8]">
          Generate optimized teams that maximize recording coverage. The algorithm pairs non-recorders with recorders when possible.
        </p>
        
        <div className="flex flex-col space-y-4">
          <Button 
            size="lg"
            onClick={generateRandomTeam}
            disabled={!mounted || hunters.length === 0}
            className="bg-[#b38a49] text-black hover:bg-[#d4a85a] border border-[#f9d877]"
          >
            Generate Teams
          </Button>
          
          <TeamsDisplay teams={teams} mounted={mounted} />
        </div>
      </section>
    </div>
  );
} 