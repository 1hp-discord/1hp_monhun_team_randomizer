export interface TeamMember {
  id: number;
  name: string;
  weapon: string;
  role: string;
  platform: 'PC' | 'Console';
  canRecord: boolean;
}

// Define weapons and roles as constants
export const weapons = [
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

export const roles = [
  'Tank',
  'DPS',
  'Support',
  'Crowd Control'
];

export const platforms = ['PC', 'Console']; 