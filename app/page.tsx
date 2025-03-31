"use client";

import { useState } from "react";
import DiffViewer from "@/components/DiffViewer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");

  const handleClearAll = () => {
    setOldText("");
    setNewText("");
  };

  return (
    <main className="w-full h-screen flex flex-col p-2">
      <div className="flex-1 flex flex-col">
        <div className="text-center py-2">
          <h1 className="text-2xl font-bold tracking-tight">Text Diff Viewer</h1>
          <p className="text-muted-foreground text-sm">
            Compare two text files and see the differences highlighted
          </p>
        </div>

        <Tabs defaultValue="editor" className="w-full flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="diff">Diff View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor" className="flex-1 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-1">
              <Card className="p-2">
                <h2 className="text-sm font-medium mb-1">Original Text</h2>
                <textarea
                  className="w-full h-[calc(100vh-160px)] p-3 border rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  value={oldText}
                  onChange={(e) => setOldText(e.target.value)}
                  placeholder="Paste original text here..."
                />
              </Card>
              
              <Card className="p-2">
                <h2 className="text-sm font-medium mb-1">New Text</h2>
                <textarea
                  className="w-full h-[calc(100vh-160px)] p-3 border rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="Paste new text here..."
                />
              </Card>
            </div>
            
            <div className="flex justify-end">
              <Button variant="outline" onClick={handleClearAll} className="mr-2">
                Clear All
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="diff" className="flex-1">
            <Card className="p-2 h-[calc(100vh-120px)]">
              <DiffViewer oldText={oldText} newText={newText} />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}