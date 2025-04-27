'use client';

import { TeamMember } from '../types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

interface TeamsDisplayProps {
  teams: TeamMember[][];
  mounted: boolean;
}

export function TeamsDisplay({ teams, mounted }: TeamsDisplayProps) {
  return (
    <div className="mt-6">
      <h3 className="text-xl mb-2 text-[#f9d877] font-medium">Generated Teams:</h3>
      <div className="border-2 border-[#b38a49] bg-[#2a2319] p-4 rounded min-h-[50px]">
        {teams.length > 0 ? (
          <div className="space-y-6">
            {teams.map((team, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center">
                      <span className="bg-[#b38a49] text-black rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">{index + 1}</span>
                      Team {index + 1}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {team.map(member => (
                      <div key={member.id} className="flex justify-between items-center p-2 border-b border-[#3d3424] last:border-0">
                        <div>
                          <span className="font-medium">{member.name}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap justify-end">
                          <Badge variant="weapon">
                            {member.weapon}
                          </Badge>
                          <Badge variant="role">
                            {member.role}
                          </Badge>
                          <Badge variant="platform">
                            {member.platform}
                          </Badge>
                          {member.canRecord && (
                            <Badge variant="record">
                              Can Record
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Display team recording capability */}
                  <div className="mt-4">
                    {team.some(member => member.canRecord) ? (
                      <Alert variant="recording">
                        <CheckCircle2 className="h-4 w-4" />
                        <AlertTitle className="font-bold">Recording Ready</AlertTitle>
                        <AlertDescription>
                          This team has recording capability
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <Alert variant="norecording">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle className="font-bold">No Recording</AlertTitle>
                        <AlertDescription>
                          This team doesn't have recording capability
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-[#8a7b65] text-center p-4">{mounted ? 'Click the button above to generate your teams' : ''}</p>
        )}
      </div>
    </div>
  );
} 