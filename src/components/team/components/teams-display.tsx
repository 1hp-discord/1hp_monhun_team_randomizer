'use client';

import { TeamMember } from '../types';

interface TeamsDisplayProps {
  teams: TeamMember[][];
  mounted: boolean;
}

export function TeamsDisplay({ teams, mounted }: TeamsDisplayProps) {
  return (
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
  );
} 