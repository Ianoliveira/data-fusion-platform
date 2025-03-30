
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Index from "./pages/Index";
import Integrations from "./pages/Integrations";
import SmartInsights from "./pages/SmartInsights";
import Customers from "./pages/Customers";
import PredictiveModels from "./pages/PredictiveModels";
import Chatbot from "./pages/Chatbot";
import DataLake from "./pages/DataLake";
import DataVisualization from "./pages/DataVisualization";
import Automations from "./pages/Automations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>Twiggy.ai - Customer Data Platform</title>
        <meta name="description" content="Plataforma de integração de dados para e-commerces" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Index />} />
            <Route path="insights" element={<SmartInsights />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="customers" element={<Customers />} />
            <Route path="predictive-models" element={<PredictiveModels />} />
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="data-lake" element={<DataLake />} />
            <Route path="data-visualization" element={<DataVisualization />} />
            <Route path="automations" element={<Automations />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
