'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TeamMember, weapons, roles, platforms } from '../types';

interface HunterFormProps {
  onAddHunter: (hunter: TeamMember) => void;
}

export function HunterForm({ onAddHunter }: HunterFormProps) {
  const [name, setName] = useState('');
  const [weapon, setWeapon] = useState(weapons[0]);
  const [role, setRole] = useState(roles[0]);
  const [platform, setPlatform] = useState<'PC' | 'Console'>('PC');
  const [canRecord, setCanRecord] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newHunter: TeamMember = {
      id: Date.now(),
      name,
      weapon,
      role,
      platform,
      canRecord
    };
    onAddHunter(newHunter);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
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
  );
} 