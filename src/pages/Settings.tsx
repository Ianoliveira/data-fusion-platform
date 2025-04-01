
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Bell, Shield, Moon, Globe } from "lucide-react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

const SettingsPage = () => {
  const { toast } = useToast();
  const accountForm = useForm({
    defaultValues: {
      name: "Gestor Demo",
      email: "gestor@twiggy.ai",
      bio: "Gerente de Dados na Twiggy.ai",
    },
  });

  const notificationForm = useForm({
    defaultValues: {
      marketing: true,
      updates: true,
      comments: false,
      mentions: true,
    },
  });

  const appearanceForm = useForm({
    defaultValues: {
      colorMode: "system",
      fontSize: "normal",
      animationReduced: false,
    },
  });

  const handleSaveSettings = (data: any) => {
    toast({
      title: "Configurações atualizadas",
      description: "Suas configurações foram salvas com sucesso.",
    });
    console.log("Saved settings:", data);
  };

  return (
    <div className="container mx-auto py-6 space-y-8 max-w-5xl">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie suas preferências e configurações da conta.
        </p>
      </div>

      <Tabs defaultValue="conta" className="w-full">
        <TabsList className="w-full grid grid-cols-4 mb-8">
          <TabsTrigger value="conta" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Conta</span>
          </TabsTrigger>
          <TabsTrigger value="notificacoes" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Notificações</span>
          </TabsTrigger>
          <TabsTrigger value="aparencia" className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            <span>Aparência</span>
          </TabsTrigger>
          <TabsTrigger value="privacidade" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Privacidade</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="conta">
          <Card variant="neo">
            <CardHeader>
              <CardTitle>Informações da Conta</CardTitle>
              <CardDescription>
                Atualize suas informações pessoais e detalhes da conta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...accountForm}>
                <form
                  onSubmit={accountForm.handleSubmit(handleSaveSettings)}
                  className="space-y-6"
                >
                  <FormField
                    control={accountForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={accountForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={accountForm.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Sobre você"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Breve descrição que aparecerá no seu perfil.
                        </FormDescription>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end">
                    <Button type="submit">Salvar alterações</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes">
          <Card variant="neo">
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>
                Escolha quais notificações você deseja receber.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...notificationForm}>
                <form
                  onSubmit={notificationForm.handleSubmit(handleSaveSettings)}
                  className="space-y-6"
                >
                  <FormField
                    control={notificationForm.control}
                    name="marketing"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Marketing</FormLabel>
                          <FormDescription>
                            Receba emails sobre novos recursos e ofertas.
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

                  <FormField
                    control={notificationForm.control}
                    name="updates"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Atualizações</FormLabel>
                          <FormDescription>
                            Receba notificações sobre atualizações da plataforma.
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

                  <FormField
                    control={notificationForm.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Comentários</FormLabel>
                          <FormDescription>
                            Receba notificações quando alguém comentar em seus relatórios.
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

                  <FormField
                    control={notificationForm.control}
                    name="mentions"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Menções</FormLabel>
                          <FormDescription>
                            Receba notificações quando for mencionado em discussões.
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

                  <div className="flex justify-end">
                    <Button type="submit">Salvar preferências</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="aparencia">
          <Card variant="neo">
            <CardHeader>
              <CardTitle>Aparência</CardTitle>
              <CardDescription>
                Personalize a aparência e experiência da interface.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...appearanceForm}>
                <form
                  onSubmit={appearanceForm.handleSubmit(handleSaveSettings)}
                  className="space-y-6"
                >
                  <FormField
                    control={appearanceForm.control}
                    name="colorMode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tema</FormLabel>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <Button
                              type="button"
                              variant={field.value === "light" ? "default" : "outline"}
                              className="w-full justify-start"
                              onClick={() => field.onChange("light")}
                            >
                              <Globe className="mr-2 h-4 w-4" />
                              Claro
                            </Button>
                            <Button
                              type="button"
                              variant={field.value === "dark" ? "default" : "outline"}
                              className="w-full justify-start"
                              onClick={() => field.onChange("dark")}
                            >
                              <Moon className="mr-2 h-4 w-4" />
                              Escuro
                            </Button>
                            <Button
                              type="button"
                              variant={field.value === "system" ? "default" : "outline"}
                              className="w-full justify-start"
                              onClick={() => field.onChange("system")}
                            >
                              <Settings className="mr-2 h-4 w-4" />
                              Sistema
                            </Button>
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={appearanceForm.control}
                    name="animationReduced"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Reduzir animações</FormLabel>
                          <FormDescription>
                            Diminuir ou remover animações para melhorar a acessibilidade.
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

                  <div className="flex justify-end">
                    <Button type="submit">Salvar preferências</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacidade">
          <Card variant="neo">
            <CardHeader>
              <CardTitle>Privacidade e Segurança</CardTitle>
              <CardDescription>
                Gerencie suas configurações de privacidade e segurança.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Alterar Senha</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Atualize sua senha para manter sua conta segura.
                </p>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button>Atualizar Senha</Button>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium">Dados Pessoais</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Gerencie como seus dados pessoais são usados.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Dados de Análise</h4>
                      <p className="text-sm text-muted-foreground">
                        Ajude-nos a melhorar enviando dados de uso anônimos.
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Compartilhar Dados</h4>
                      <p className="text-sm text-muted-foreground">
                        Permitir o compartilhamento de dados entre integrações.
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
