"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export default function MadeInMacaly() {
  return (
    <div className="absolute top-4 right-4 z-[100]">
      <Link 
        href="https://macaly.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
      >
        <span>Made in</span>
        <Logo className="w-[65px] h-4 group-hover:scale-105 transition-transform" />
      </Link>
    </div>
  );
}