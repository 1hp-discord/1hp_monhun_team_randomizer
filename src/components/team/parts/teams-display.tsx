'use client';

import { useState } from 'react';
import { TeamMember } from '../types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle2, ClipboardCopy, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamsDisplayProps {
  teams: TeamMember[][];
  mounted: boolean;
}

export function TeamsDisplay({ teams, mounted }: TeamsDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Generate Markdown for teams
  const generateTeamsMarkdown = () => {
    if (teams.length === 0) return '';
    
    let markdown = "# Monster Hunter Squad Teams\n\n";
    
    teams.forEach((team, index) => {
      markdown += `## Team ${index + 1}\n`;
      
      team.forEach(member => {
        markdown += `- **${member.name}**: ${member.weapon} (${member.role}, ${member.platform})`;
        if (member.canRecord) {
          markdown += ` 📹 *Can record*`;
        }
        markdown += "\n";
      });
      
      const hasRecording = team.some(member => member.canRecord);
      if (hasRecording) {
        markdown += `\n> ✅ **Recording Ready**: This team has recording capability\n`;
      } else {
        markdown += `\n> ⚠️ **No Recording**: This team doesn't have recording capability\n`;
      }
      
      markdown += "\n";
    });
    
    return markdown;
  };
  
  // Copy teams to clipboard
  const copyToClipboard = async () => {
    const markdown = generateTeamsMarkdown();
    if (markdown) {
      try {
        await navigator.clipboard.writeText(markdown);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };
  
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl text-[#f9d877] font-medium">Generated Teams:</h3>
        {teams.length > 0 && (
          <div className="relative">
            <Button 
              onClick={copyToClipboard}
              className={`flex items-center gap-2 bg-[#b38a49] text-black hover:bg-[#d4a85a] border-2 
                ${copied ? 'border-green-500' : 'border-[#f9d877]'} 
                transition-all duration-300 shadow-lg ${copied ? 'shadow-green-500/30' : teams.length > 0 ? 'shadow-[#f9d877]/30 animate-pulse' : ''}`}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <ClipboardCopy className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy for Discord'}
            </Button>
            
            {showTooltip && (
              <div className="absolute bottom-full mb-2 right-0 bg-[#2a2319] border border-[#b38a49] p-3 rounded-md shadow-lg text-[#e6d2a8] text-sm w-64 z-10">
                <div className="flex items-start mb-1">
                  <Info className="h-4 w-4 text-[#f9d877] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="font-medium text-[#f9d877]">Copy Formatted Team Data</span>
                </div>
                <p>Creates markdown-formatted text of all teams that can be pasted directly into Discord.</p>
              </div>
            )}
          </div>
        )}
      </div>
      
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