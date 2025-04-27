import { TeamMember, weapons, roles } from '../types';

// Shuffle array helper
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Generate random hunters if needed
export function generateRandomHunters(count: number): TeamMember[] {
  const shuffledWeapons = shuffleArray(weapons);
  const shuffledRoles = shuffleArray(roles);
  
  return Array.from({ length: count }, (_, i) => ({
    id: Date.now() + i,
    name: `Random Hunter ${i + 1}`,
    weapon: shuffledWeapons[i % weapons.length],
    role: shuffledRoles[i % roles.length],
    platform: Math.random() > 0.5 ? 'PC' : 'Console',
    canRecord: Math.random() > 0.5
  }));
}

// Create teams with optimal recorder distribution
export function createOptimalTeams(hunters: TeamMember[]): TeamMember[][] {
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