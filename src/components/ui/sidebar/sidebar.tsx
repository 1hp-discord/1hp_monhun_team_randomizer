'use client';

import React from 'react';
import Image from 'next/image';
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
          <Button variant="outline" size="icon" className="absolute top-4 left-4 z-40 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <div className="px-2 py-6">
            <div className="flex items-center justify-center mb-6">
              <Image 
                src="/1hpLogo_Colored.svg" 
                alt="1HP Squad Logo" 
                width={120} 
                height={120} 
                className="h-auto"
              />
            </div>
            <h2 className="text-lg font-semibold mb-4 text-center">Monster Hunter Team Randomizer</h2>
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">Home</Button>
              <Button variant="ghost" className="w-full justify-start">Teams</Button>
              <Button variant="ghost" className="w-full justify-start">Rules</Button>
              <Button variant="ghost" className="w-full justify-start">About</Button>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex h-screen w-[240px] flex-col border-r bg-background px-3 py-4 fixed">
        <div className="flex items-center justify-center mb-6">
          <Image 
            src="/1hpLogo_Colored.svg" 
            alt="1HP Squad Logo" 
            width={120} 
            height={120} 
            className="h-auto"
          />
        </div>
        <h2 className="text-lg font-semibold mb-4 text-center">Monster Hunter Team Randomizer</h2>
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