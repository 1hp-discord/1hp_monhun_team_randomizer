import React from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  children?: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <div className="px-2 py-6">
            <h2 className="text-lg font-semibold mb-4">Monster Hunter Team Randomizer</h2>
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">Home</Button>
              <Button variant="ghost" className="w-full justify-start">Teams</Button>
              <Button variant="ghost" className="w-full justify-start">Rules</Button>
              <Button variant="ghost" className="w-full justify-start">About</Button>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex h-screen w-[240px] flex-col border-r bg-background px-3 py-4">
        <h2 className="text-lg font-semibold mb-4">Monster Hunter Team Randomizer</h2>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">Home</Button>
          <Button variant="ghost" className="w-full justify-start">Teams</Button>
          <Button variant="ghost" className="w-full justify-start">Rules</Button>
          <Button variant="ghost" className="w-full justify-start">About</Button>
        </nav>
      </div>
      <div className="flex-1">{children}</div>
    </>
  );
} 