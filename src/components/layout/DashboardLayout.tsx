
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from './AppSidebar';
import { Outlet } from 'react-router-dom';
import { UserNav } from '../shared/UserNav';
import { ModeToggle } from '../shared/ModeToggle';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/90 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-accent rounded-full p-2" />
              <div className="relative w-64">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar..." 
                  className="pl-10"
                  variant="neo"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <UserNav />
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
