
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  Layers, 
  Settings, 
  Users, 
  PieChart, 
  Zap, 
  Database, 
  MessageSquareText,
  LineChart,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarTrigger 
} from '@/components/ui/sidebar';

const NavItem = ({ 
  to, 
  icon: Icon, 
  children 
}: { 
  to: string; 
  icon: React.ComponentType<any>; 
  children: React.ReactNode 
}) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => cn(
      "flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
      isActive && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
    )}
  >
    <Icon className="w-5 h-5" />
    <span>{children}</span>
  </NavLink>
);

export function AppSidebar() {
  return (
    <Sidebar className="border-r bg-sidebar">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 text-white bg-twiggy-blue-600 rounded-lg">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-sidebar-foreground">Twiggy.ai</h2>
            <p className="text-xs text-sidebar-foreground/60">Customer Data Platform</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <div className="mb-6">
          <h3 className="mb-2 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
            Visão Geral
          </h3>
          <nav className="flex flex-col gap-1">
            <NavItem to="/" icon={BarChart3}>Dashboard</NavItem>
            <NavItem to="/insights" icon={Sparkles}>Smart Insights</NavItem>
            <NavItem to="/customers" icon={Users}>Clientes</NavItem>
          </nav>
        </div>
        
        <div className="mb-6">
          <h3 className="mb-2 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
            Fontes de Dados
          </h3>
          <nav className="flex flex-col gap-1">
            <NavItem to="/integrations" icon={Layers}>Integrações</NavItem>
            <NavItem to="/data-lake" icon={Database}>Data Lake</NavItem>
            <NavItem to="/data-visualization" icon={LineChart}>Visualização</NavItem>
          </nav>
        </div>
        
        <div className="mb-6">
          <h3 className="mb-2 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
            AI & Automação
          </h3>
          <nav className="flex flex-col gap-1">
            <NavItem to="/predictive-models" icon={PieChart}>Modelos Preditivos</NavItem>
            <NavItem to="/automations" icon={Zap}>Automações</NavItem>
            <NavItem to="/chatbot" icon={MessageSquareText}>Consulta Natural</NavItem>
          </nav>
        </div>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <NavLink to="/settings">
          <Button variant="outline" className="w-full justify-start text-sidebar-foreground">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Button>
        </NavLink>
      </SidebarFooter>
    </Sidebar>
  );
}
