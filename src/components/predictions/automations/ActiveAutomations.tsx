
import { Automation, AutomationCard } from "./AutomationCard";
import { Platform } from "./AutomationForm";
import { Button } from "@/components/ui/button";

type ActiveAutomationsProps = {
  automations: Automation[];
  platforms: Platform[];
  onToggleAutomation: (id: string) => void;
  onRunNow: (id: string) => void;
  onOpenDetails: (automation: Automation) => void;
};

export function ActiveAutomations({ 
  automations, 
  platforms, 
  onToggleAutomation, 
  onRunNow, 
  onOpenDetails 
}: ActiveAutomationsProps) {
  if (automations.length === 0) {
    return (
      <div className="text-center py-10 border rounded-lg">
        <p className="text-muted-foreground">Nenhuma automação configurada</p>
        <Button variant="outline" className="mt-4">Criar primeira automação</Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {automations.map((automation) => (
        <AutomationCard
          key={automation.id}
          automation={automation}
          platforms={platforms}
          onToggle={onToggleAutomation}
          onRunNow={onRunNow}
          onOpenDetails={onOpenDetails}
        />
      ))}
    </div>
  );
}
