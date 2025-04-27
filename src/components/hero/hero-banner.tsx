'use client';

import React from 'react';

interface HeroBannerProps {
  title: string;
  subtitle: string;
}

export function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between py-8 border-b-2 border-[#b38a49] mb-4">
        <div className="flex-1 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2 text-[#f9d877] flex items-center">
            <span className="text-5xl mr-4">⚔️</span>
            {title}
          </h1>
          <p className="text-xl text-[#e6d2a8]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
} 