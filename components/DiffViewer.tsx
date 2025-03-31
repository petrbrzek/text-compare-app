"use client";

import { useState, useEffect } from "react";
import ReactDiffViewer from "react-diff-viewer-continued";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "next-themes";

interface DiffViewerProps {
  oldText: string;
  newText: string;
}

export default function DiffViewer({ oldText, newText }: DiffViewerProps) {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  useEffect(() => {
    setIsClient(true);
    
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Reset loading state when text changes
    if (oldText || newText) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [oldText, newText]);

  if (!isClient) {
    return <LoadingSkeleton />;
  }

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (!oldText && !newText) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-140px)] text-muted-foreground">
        Enter text in both editors to see the diff
      </div>
    );
  }

  return (
    <div className="diff-wrapper h-[calc(100vh-140px)] overflow-auto">
      <ReactDiffViewer
        oldValue={oldText}
        newValue={newText}
        splitView={true}
        useDarkTheme={isDarkTheme}
        compareMethod="diffWords"
        styles={{
          variables: {
            light: {
              diffViewerBackground: 'var(--background)',
              diffViewerColor: 'var(--foreground)',
              addedBackground: 'rgba(0, 255, 0, 0.1)',
              addedColor: 'var(--foreground)',
              removedBackground: 'rgba(255, 0, 0, 0.1)',
              removedColor: 'var(--foreground)',
              wordAddedBackground: 'rgba(0, 255, 0, 0.2)',
              wordRemovedBackground: 'rgba(255, 0, 0, 0.2)',
              addedGutterBackground: 'rgba(0, 255, 0, 0.2)',
              removedGutterBackground: 'rgba(255, 0, 0, 0.2)',
              gutterBackground: 'var(--muted)',
              gutterBackgroundDark: 'var(--muted)',
              gutterColor: 'var(--muted-foreground)',
              codeFoldBackground: 'var(--card)',
              codeFoldGutterBackground: 'var(--card)',
            },
            dark: {
              diffViewerBackground: 'var(--background)',
              diffViewerColor: 'var(--foreground)',
              addedBackground: 'rgba(0, 255, 0, 0.1)',
              addedColor: 'var(--foreground)',
              removedBackground: 'rgba(255, 0, 0, 0.1)',
              removedColor: 'var(--foreground)',
              wordAddedBackground: 'rgba(0, 255, 0, 0.2)',
              wordRemovedBackground: 'rgba(255, 0, 0, 0.2)',
              addedGutterBackground: 'rgba(0, 255, 0, 0.2)',
              removedGutterBackground: 'rgba(255, 0, 0, 0.2)',
              gutterBackground: 'var(--muted)',
              gutterBackgroundDark: 'var(--muted)',
              gutterColor: 'var(--muted-foreground)',
              codeFoldBackground: 'var(--card)',
              codeFoldGutterBackground: 'var(--card)',
            }
          }
        }}
      />
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Skeleton className="h-4 w-20 mb-1" />
          <Skeleton className="h-[calc(100vh-140px)] w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-20 mb-1" />
          <Skeleton className="h-[calc(100vh-140px)] w-full" />
        </div>
      </div>
    </div>
  );
}