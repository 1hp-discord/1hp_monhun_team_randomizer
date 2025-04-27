'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="mr-2">⚔️</span>
          Hunter Registration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#f9d877]" htmlFor="hunter-name">
              Hunter Name
            </label>
            <Input
              id="hunter-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter hunter name"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f9d877]">Weapon</label>
              <Select value={weapon} onValueChange={setWeapon}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a weapon" />
                </SelectTrigger>
                <SelectContent>
                  {weapons.map((w) => (
                    <SelectItem key={w} value={w}>
                      {w}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f9d877]">Role</label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#f9d877]">Platform</label>
              <Select 
                value={platform} 
                onValueChange={(value) => setPlatform(value as 'PC' | 'Console')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a platform" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2 h-full pt-8">
              <Checkbox 
                id="can-record"
                checked={canRecord}
                onCheckedChange={(checked) => setCanRecord(checked === true)}
              />
              <label
                htmlFor="can-record"
                className="text-sm font-medium leading-none"
              >
                Can Record Gameplay
              </label>
            </div>
          </div>
          
          <Button type="submit" className="w-full">
            Add Hunter
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 