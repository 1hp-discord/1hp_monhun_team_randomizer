'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface TeamMember {
  id: number;
  weapon: string;
  role: string;
}

// Define weapons and roles as constants, which won't cause hydration mismatches
const weapons = [
  'Great Sword',
  'Long Sword',
  'Sword & Shield',
  'Dual Blades',
  'Hammer',
  'Hunting Horn',
  'Lance',
  'Gunlance',
  'Switch Axe',
  'Charge Blade',
  'Insect Glaive',
  'Light Bowgun',
  'Heavy Bowgun',
  'Bow'
];

const roles = [
  'Tank',
  'DPS',
  'Support',
  'Crowd Control'
];

// Ensure random operations only happen on the client
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export function TeamGenerator() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const generateRandomTeam = () => {
    const shuffledWeapons = shuffleArray(weapons);
    const shuffledRoles = shuffleArray(roles);
    
    const newTeam = Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      weapon: shuffledWeapons[i],
      role: shuffledRoles[i % roles.length]
    }));
    
    setTeam(newTeam);
  };
  
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-4">1HP Squad Challenge</h2>
      <p className="mb-6">
        Generate random team compositions for your Monster Hunter hunts. Challenge yourself 
        with the 1HP Squad rules - can you survive with just one hit point?
      </p>
      
      <div className="flex flex-col space-y-4">
        {/* Only enable the button once client-side JS is available */}
        <Button 
          variant="destructive" 
          size="lg"
          onClick={generateRandomTeam}
          disabled={!mounted}
        >
          Generate Random Team
        </Button>
        
        <div className="mt-6">
          <h3 className="text-xl mb-2">Your Team:</h3>
          <div className="bg-muted p-4 rounded min-h-[50px]">
            {team.length > 0 ? (
              <div className="space-y-2">
                {team.map(member => (
                  <div key={member.id} className="flex justify-between items-center bg-background p-3 rounded">
                    <div>
                      <span className="font-medium">Hunter {member.id}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-xs rounded-full">
                        {member.weapon}
                      </span>
                      <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-xs rounded-full">
                        {member.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>{mounted ? 'Click the button above to generate your team' : ''}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 