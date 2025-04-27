'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface TeamMember {
  id: number;
  weapon: string;
  role: string;
}

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

export function TeamGenerator() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  
  const generateRandomTeam = () => {
    const shuffledWeapons = [...weapons].sort(() => 0.5 - Math.random());
    const shuffledRoles = [...roles].sort(() => 0.5 - Math.random());
    
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
        <Button 
          variant="destructive" 
          size="lg"
          onClick={generateRandomTeam}
        >
          Generate Random Team
        </Button>
        
        <div className="mt-6">
          <h3 className="text-xl mb-2">Your Team:</h3>
          <div className="bg-muted p-4 rounded">
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
              <p>Click the button above to generate your team</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 