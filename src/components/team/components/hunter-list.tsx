'use client';

import { TeamMember } from '../types';
import { Button } from '@/components/ui/button';

interface HunterListProps {
  hunters: TeamMember[];
  onRemoveHunter: (id: number) => void;
}

export function HunterList({ hunters, onRemoveHunter }: HunterListProps) {
  if (hunters.length === 0) {
    return null;
  }

  return (
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
                onClick={() => onRemoveHunter(hunter.id)}
                className="text-red-500 h-8 w-8 p-0"
              >
                ✕
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 