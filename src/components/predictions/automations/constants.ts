
import { Platform } from "./AutomationForm";

export const PLATFORMS: Platform[] = [
  { 
    id: "salesforce", 
    name: "Salesforce", 
    icon: "crm", 
    connected: true, 
    actions: ["Criar oportunidade", "Atualizar lead", "Enviar alerta", "Adicionar à campanha"] 
  },
  { 
    id: "hubspot", 
    name: "HubSpot", 
    icon: "crm", 
    connected: true, 
    actions: ["Criar ticket", "Atualizar contato", "Enviar email", "Adicionar à sequência"] 
  },
  { 
    id: "mailchimp", 
    name: "Mailchimp", 
    icon: "marketing", 
    connected: true, 
    actions: ["Adicionar à lista", "Enviar campanha", "Atualizar tags", "Criar segmento"] 
  },
  { 
    id: "shopify", 
    name: "Shopify", 
    icon: "ecommerce", 
    connected: true, 
    actions: ["Criar desconto", "Enviar abandonos", "Atualizar produto", "Notificar equipe"] 
  },
  { 
    id: "ads", 
    name: "Facebook Ads", 
    icon: "ads", 
    connected: false, 
    actions: ["Ajustar orçamento", "Pausar campanha", "Criar público", "Duplicar anúncio"] 
  },
];
