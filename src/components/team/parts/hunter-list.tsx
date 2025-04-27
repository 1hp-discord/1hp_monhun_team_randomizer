'use client';

import { TeamMember } from '../types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

interface HunterListProps {
  hunters: TeamMember[];
  onRemoveHunter: (id: number) => void;
}

export function HunterList({ hunters, onRemoveHunter }: HunterListProps) {
  if (hunters.length === 0) {
    return null;
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>
          <span className="mr-2">📜</span>
          Registered Hunters ({hunters.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {hunters.map(hunter => (
            <div 
              key={hunter.id} 
              className="flex justify-between items-center p-3 rounded border border-[#b38a49] bg-[#2a2319]"
            >
              <div>
                <span className="font-medium">{hunter.name}</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="weapon">
                  {hunter.weapon}
                </Badge>
                <Badge variant="role">
                  {hunter.role}
                </Badge>
                <Badge variant="platform">
                  {hunter.platform}
                </Badge>
                {hunter.canRecord && (
                  <Badge variant="record">
                    Can Record
                  </Badge>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => onRemoveHunter(hunter.id)}
                  className="text-[#e65a5a] hover:text-[#ff7070] h-8 w-8 p-0 ml-2 hover:bg-[#3d2424]"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 