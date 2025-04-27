'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface TeamMember {
  id: number;
  name: string;
  weapon: string;
  role: string;
  platform: 'PC' | 'Console';
  canRecord: boolean;
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

const platforms = ['PC', 'Console'];

// Ensure random operations only happen on the client
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Create a team of pairs with optimal recorder distribution
function createOptimalTeams(hunters: TeamMember[]): TeamMember[][] {
  // Separate hunters by recording capability
  const recorders = hunters.filter(hunter => hunter.canRecord);
  const nonRecorders = hunters.filter(hunter => !hunter.canRecord);
  
  // Shuffle both lists to randomize
  const shuffledRecorders = shuffleArray([...recorders]);
  const shuffledNonRecorders = shuffleArray([...nonRecorders]);
  
  // Initialize teams array
  const teams: TeamMember[][] = [];
  
  // First, pair non-recorders with recorders as much as possible
  while (shuffledNonRecorders.length > 0 && shuffledRecorders.length > 0) {
    teams.push([
      shuffledNonRecorders.pop()!,
      shuffledRecorders.pop()!
    ]);
  }
  
  // Create a combined array of remaining hunters
  const remainingHunters = [...shuffledNonRecorders, ...shuffledRecorders];
  const shuffledRemaining = shuffleArray(remainingHunters);
  
  // Pair remaining hunters
  for (let i = 0; i < shuffledRemaining.length; i += 2) {
    if (i + 1 < shuffledRemaining.length) {
      teams.push([
        shuffledRemaining[i],
        shuffledRemaining[i + 1]
      ]);
    } else {
      // If there's an odd number, the last hunter gets a solo team
      teams.push([shuffledRemaining[i]]);
    }
  }
  
  return teams;
}

export function TeamGenerator() {
  const [teams, setTeams] = useState<TeamMember[][]>([]);
  const [hunters, setHunters] = useState<TeamMember[]>([]);
  const [mounted, setMounted] = useState(false);
  
  // Form state
  const [name, setName] = useState('');
  const [weapon, setWeapon] = useState(weapons[0]);
  const [role, setRole] = useState(roles[0]);
  const [platform, setPlatform] = useState<'PC' | 'Console'>('PC');
  const [canRecord, setCanRecord] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const addHunter = (e: React.FormEvent) => {
    e.preventDefault();
    const newHunter: TeamMember = {
      id: Date.now(), // Use timestamp to ensure unique IDs
      name,
      weapon,
      role,
      platform,
      canRecord
    };
    setHunters([...hunters, newHunter]);
    
    // Reset form
    setName('');
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
      const shuffledWeapons = shuffleArray(weapons);
      const shuffledRoles = shuffleArray(roles);
      
      for (let i = allHunters.length; i < 2; i++) {
        allHunters.push({
          id: Date.now() + i,
          name: `Random Hunter ${i + 1}`,
          weapon: shuffledWeapons[i % weapons.length],
          role: shuffledRoles[i % roles.length],
          platform: Math.random() > 0.5 ? 'PC' : 'Console',
          canRecord: Math.random() > 0.5
        });
      }
    }
    
    // Generate optimal teams
    const generatedTeams = createOptimalTeams(allHunters);
    setTeams(generatedTeams);
  };
  
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-4">Hunter Registration</h2>
      
      <form onSubmit={addHunter} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Hunter Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md bg-background"
            placeholder="Enter hunter name"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Weapon</label>
            <select
              value={weapon}
              onChange={(e) => setWeapon(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-background"
            >
              {weapons.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-background"
            >
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value as 'PC' | 'Console')}
              className="w-full px-3 py-2 border rounded-md bg-background"
            >
              {platforms.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center mt-7">
            <input
              type="checkbox"
              checked={canRecord}
              onChange={(e) => setCanRecord(e.target.checked)}
              className="h-4 w-4 mr-2"
              id="can-record"
            />
            <label htmlFor="can-record">Can Record Gameplay</label>
          </div>
        </div>
        
        <Button type="submit" className="w-full">Add Hunter</Button>
      </form>
      
      {hunters.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl mb-2">Registered Hunters ({hunters.length}):</h3>
          <div className="bg-muted p-4 rounded space-y-2">
            {hunters.map(hunter => (
              <div key={hunter.id} className="flex justify-between items-center bg-background p-3 rounded">
                <div>
                  <span className="font-medium">{hunter.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-xs rounded-full">
                    {hunter.weapon}
                  </span>
                  <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-xs rounded-full">
                    {hunter.role}
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-xs rounded-full">
                    {hunter.platform}
                  </span>
                  {hunter.canRecord && (
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-xs rounded-full">
                      Can Record
                    </span>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeHunter(hunter.id)}
                    className="text-red-500 h-8 w-8 p-0"
                  >
                    ✕
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4">1HP Squad Challenge</h2>
        <p className="mb-6">
          Generate optimized teams that maximize recording coverage. The algorithm pairs non-recorders with recorders when possible.
        </p>
        
        <div className="flex flex-col space-y-4">
          <Button 
            variant="destructive" 
            size="lg"
            onClick={generateRandomTeam}
            disabled={!mounted || hunters.length === 0}
          >
            Generate Teams
          </Button>
          
          <div className="mt-6">
            <h3 className="text-xl mb-2">Generated Teams:</h3>
            <div className="bg-muted p-4 rounded min-h-[50px]">
              {teams.length > 0 ? (
                <div className="space-y-6">
                  {teams.map((team, index) => (
                    <div key={index} className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Team {index + 1}</h4>
                      <div className="space-y-2">
                        {team.map(member => (
                          <div key={member.id} className="flex justify-between items-center p-2 border-b last:border-0">
                            <div>
                              <span className="font-medium">{member.name}</span>
                            </div>
                            <div className="flex items-center gap-2 flex-wrap justify-end">
                              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-xs rounded-full">
                                {member.weapon}
                              </span>
                              <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-xs rounded-full">
                                {member.role}
                              </span>
                              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-xs rounded-full">
                                {member.platform}
                              </span>
                              {member.canRecord && (
                                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-xs rounded-full">
                                  Can Record
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Display team recording capability */}
                      <div className="mt-2 text-sm">
                        {team.some(member => member.canRecord) ? (
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            ✓ This team has recording capability
                          </span>
                        ) : (
                          <span className="text-amber-600 dark:text-amber-400 font-medium">
                            ⚠ No recording capability
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{mounted ? 'Click the button above to generate your teams' : ''}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 