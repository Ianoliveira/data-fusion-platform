
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Zap } from "lucide-react";

const formSchema = z.object({
  modelType: z.string(),
  platform: z.string(),
  triggerThreshold: z.number().min(0).max(100),
  action: z.string(),
  isActive: z.boolean().default(false),
});

export type Platform = {
  id: string;
  name: string;
  icon: string;
  connected: boolean;
  actions: string[];
};

type AutomationFormProps = {
  platforms: Platform[];
  onSubmit: (values: z.infer<typeof formSchema>) => void;
};

export function AutomationForm({ platforms, onSubmit }: AutomationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      modelType: "segmentation",
      platform: "salesforce",
      triggerThreshold: 70,
      action: "Criar oportunidade",
      isActive: false,
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="modelType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Modelo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um modelo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="segmentation">Segmentação de Clientes</SelectItem>
                  <SelectItem value="recommendation">Recomendação de Produtos</SelectItem>
                  <SelectItem value="churn">Previsão de Churn</SelectItem>
                  <SelectItem value="lifetime">LTV Prediction</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Selecione o modelo que deseja utilizar para esta automação
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="platform"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plataforma</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma plataforma" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {platforms.map((platform) => (
                    <SelectItem key={platform.id} value={platform.id} disabled={!platform.connected}>
                      {platform.name} {!platform.connected && "(Não conectado)"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Selecione a plataforma onde a ação será executada
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="action"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ação</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma ação" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {platforms
                    .find(p => p.id === form.watch("platform"))
                    ?.actions.map((action) => (
                      <SelectItem key={action} value={action}>
                        {action}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Selecione a ação que será executada quando o limite for atingido
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="triggerThreshold"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Limite de ativação: {field.value}%</FormLabel>
              <FormControl>
                <Slider
                  value={[field.value]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => field.onChange(value[0])}
                  className="mt-2"
                />
              </FormControl>
              <FormDescription>
                Defina o percentual de confiança do modelo que acionará a automação
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="isActive"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Ativar automação</FormLabel>
                <FormDescription>
                  A automação estará ativa imediatamente após a criação
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full">
          <Zap className="mr-2 h-4 w-4" /> Criar Automação
        </Button>
      </form>
    </Form>
  );
}
