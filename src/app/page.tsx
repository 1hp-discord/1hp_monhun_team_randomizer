import { Sidebar } from '@/components/sidebar';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 md:p-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Monster Hunter Team Randomizer</h1>
          
          <div className="bg-card p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">1HP Squad Challenge</h2>
            <p className="mb-6">
              Generate random team compositions for your Monster Hunter hunts. Challenge yourself 
              with the 1HP Squad rules - can you survive with just one hit point?
            </p>
            
            <div className="flex flex-col space-y-4">
              <Button variant="destructive" size="lg">
                Generate Random Team
              </Button>
              
              <div className="mt-6">
                <h3 className="text-xl mb-2">Your Team:</h3>
                <div className="bg-muted p-4 rounded">
                  <p>Click the button above to generate your team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
