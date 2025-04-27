'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Sword, Shield, ScrollText, Home } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import routes from './routes';

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="fixed top-4 left-4 z-40 md:hidden shadow-md bg-[#2a2319] border-[#b38a49]"
          >
            <Menu className="h-5 w-5 text-[#f9d877]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="left" 
          className="w-[240px] sm:w-[300px] p-0"
        >
          <div className="flex flex-col h-full">
            <div className="px-2 py-6 border-b border-[#b38a49] bg-[#2a2319]">
              <div className="flex items-center justify-center mb-4">
                <Image 
                  src="/1hpLogo_Colored.svg" 
                  alt="1HP Squad Logo" 
                  width={100} 
                  height={100} 
                  className="h-auto"
                />
              </div>
              <SheetTitle>
                Monster Hunter Assistant
              </SheetTitle>
            </div>
            <nav className="flex-1 overflow-auto p-4">
              <div className="space-y-2">
                {routes.map((route) => {
                  const isActive = pathname === route.href;
                  const Icon = route.icon;
                  
                  return (
                    <Button
                      key={route.href}
                      variant={isActive ? "monhun" : "ghost"}
                      className={`w-full justify-start ${isActive ? '' : 'text-[#e6d2a8] hover:bg-[#2a2319] hover:text-[#f9d877]'}`}
                      asChild
                      onClick={() => setOpen(false)}
                    >
                      <Link href={route.href}>
                        <Icon className="mr-2 h-5 w-5" />
                        {route.label}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      
      <div className="hidden md:flex h-screen w-[240px] flex-col border-r border-[#b38a49] bg-[#1a1a1a] fixed">
        <div className="px-2 py-6 border-b border-[#b38a49] bg-[#2a2319]">
          <div className="flex items-center justify-center mb-4">
            <Image 
              src="/1hpLogo_Colored.svg" 
              alt="1HP Squad Logo" 
              width={100} 
              height={100} 
              className="h-auto"
            />
          </div>
          <h2 className="text-lg font-medium text-center text-[#f9d877]">Monster Hunter Assistant</h2>
        </div>
        <nav className="flex-1 overflow-auto p-4">
          <div className="space-y-2">
            {routes.map((route) => {
              const isActive = pathname === route.href;
              const Icon = route.icon;
              
              return (
                <Button
                  key={route.href}
                  variant={isActive ? "monhun" : "ghost"}
                  className={`w-full justify-start ${isActive ? '' : 'text-[#e6d2a8] hover:bg-[#2a2319] hover:text-[#f9d877]'}`}
                  asChild
                >
                  <Link href={route.href}>
                    <Icon className="mr-2 h-5 w-5" />
                    {route.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
} 