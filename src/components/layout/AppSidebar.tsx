
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
  Sparkles,
  Compass
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
      "flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200",
      isActive 
        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-neo-button-light dark:shadow-neo-button-dark" 
        : "hover:shadow-neo-inset-light dark:hover:shadow-neo-inset-dark"
    )}
  >
    <Icon className="w-5 h-5" />
    <span>{children}</span>
  </NavLink>
);

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarHeader className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 text-white bg-twiggy-blue-600 rounded-xl shadow-neo-button-light dark:shadow-neo-button-dark">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-sidebar-foreground">Twiggy.ai</h2>
            <p className="text-xs text-sidebar-foreground/60">Customer Data Platform</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-5">
        <div className="mb-8">
          <h3 className="mb-3 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider px-4">
            Visão Geral
          </h3>
          <nav className="flex flex-col gap-2">
            <NavItem to="/" icon={BarChart3}>Dashboard</NavItem>
            <NavItem to="/insights" icon={Sparkles}>Smart Insights</NavItem>
            <NavItem to="/customers" icon={Users}>Clientes</NavItem>
          </nav>
        </div>
        
        <div className="mb-8">
          <h3 className="mb-3 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider px-4">
            Fontes de Dados
          </h3>
          <nav className="flex flex-col gap-2">
            <NavItem to="/integrations" icon={Layers}>Integrações</NavItem>
            <NavItem to="/data-lake" icon={Database}>Data Lake</NavItem>
            <NavItem to="/data-visualization" icon={LineChart}>Visualização</NavItem>
          </nav>
        </div>
        
        <div className="mb-8">
          <h3 className="mb-3 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider px-4">
            AI & Personalização
          </h3>
          <nav className="flex flex-col gap-2">
            <NavItem to="/predictive-models" icon={PieChart}>Modelos Preditivos</NavItem>
            <NavItem to="/journeys" icon={Compass}>Jornadas</NavItem>
            <NavItem to="/automations" icon={Zap}>Automações</NavItem>
            <NavItem to="/chatbot" icon={MessageSquareText}>Consulta Natural</NavItem>
          </nav>
        </div>
      </SidebarContent>
      
      <SidebarFooter className="p-5 border-t border-sidebar-border">
        <NavLink to="/settings">
          <Button variant="neo" className="w-full justify-start text-sidebar-foreground">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Button>
        </NavLink>
      </SidebarFooter>
    </Sidebar>
  );
}
