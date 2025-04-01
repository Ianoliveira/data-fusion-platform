
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  PieChart,
  User, 
  Edit, 
  Calendar, 
  Mail, 
  Building, 
  MapPin, 
  Phone, 
  Clock, 
  Shield, 
  Activity 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ProfilePage = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const userInfo = {
    name: "Gestor Demo",
    email: "gestor@twiggy.ai",
    role: "Gerente de Dados",
    company: "Twiggy.ai",
    location: "São Paulo, Brasil",
    phone: "+55 (11) 99999-9999",
    memberSince: "Janeiro 2023",
    lastActive: "Hoje, 14:25",
    bio: "Especialista em análise de dados e inteligência de negócios, com foco em e-commerce e comportamento do consumidor. Trabalho com a plataforma Twiggy.ai para criar insights que impulsionam decisões estratégicas.",
  };

  const recentActivities = [
    { id: 1, action: "Analisou relatório de vendas do Q2", date: "Hoje, 10:35" },
    { id: 2, action: "Criou modelo preditivo de churn", date: "Ontem, 15:20" },
    { id: 3, action: "Configurou nova integração com Shopify", date: "23/05/2023" },
    { id: 4, action: "Compartilhou dashboard de KPIs", date: "20/05/2023" },
    { id: 5, action: "Atualizou fluxo de automação de emails", date: "18/05/2023" },
  ];

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram atualizadas com sucesso.",
    });
  };

  return (
    <div className="container mx-auto py-6 space-y-8 max-w-5xl">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
        <Button 
          variant="neo" 
          onClick={isEditing ? handleSaveProfile : handleEditProfile}
        >
          {isEditing ? "Salvar" : "Editar Perfil"}
          {!isEditing && <Edit className="ml-2 h-4 w-4" />}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1" variant="neo">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Avatar className="h-32 w-32 mb-4">
              <AvatarImage src="/placeholder.svg" alt={userInfo.name} />
              <AvatarFallback className="text-2xl">GD</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">{userInfo.name}</h2>
            <p className="text-muted-foreground">{userInfo.role}</p>
            <p className="text-muted-foreground">{userInfo.company}</p>
            
            <div className="border-t w-full my-6 pt-6 text-left space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{userInfo.email}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{userInfo.company}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{userInfo.location}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{userInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Membro desde {userInfo.memberSince}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Ativo {userInfo.lastActive}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Card variant="neo">
            <CardHeader>
              <CardTitle>Sobre</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {userInfo.bio}
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="atividade">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="atividade" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                <span>Atividade</span>
              </TabsTrigger>
              <TabsTrigger value="estatisticas" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                <span>Estatísticas</span>
              </TabsTrigger>
              <TabsTrigger value="seguranca" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Segurança</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="atividade">
              <Card variant="neo">
                <CardHeader>
                  <CardTitle>Atividade Recente</CardTitle>
                  <CardDescription>
                    Acompanhe suas interações mais recentes na plataforma.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex justify-between items-start border-b pb-3 last:border-0">
                        <div>
                          <p className="font-medium">{activity.action}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="estatisticas">
              <Card variant="neo">
                <CardHeader>
                  <CardTitle>Estatísticas de Uso</CardTitle>
                  <CardDescription>
                    Análise de seu uso da plataforma nos últimos 30 dias.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Relatórios Criados</span>
                        <span className="text-sm">12</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Modelos Treinados</span>
                        <span className="text-sm">5</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Consultas Realizadas</span>
                        <span className="text-sm">42</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Integrações Ativas</span>
                        <span className="text-sm">7</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seguranca">
              <Card variant="neo">
                <CardHeader>
                  <CardTitle>Segurança e Permissões</CardTitle>
                  <CardDescription>
                    Visualize e gerencie seu acesso e permissões na plataforma.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-medium mb-2">Nível de Acesso</h3>
                      <div className="flex items-center p-3 rounded-lg bg-secondary/50">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        <span className="font-medium">Administrador</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-medium mb-2">Permissões</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center justify-between border-b pb-2">
                          <span>Gerenciar usuários</span>
                          <span className="text-green-500 font-medium">Permitido</span>
                        </li>
                        <li className="flex items-center justify-between border-b pb-2">
                          <span>Criar modelos preditivos</span>
                          <span className="text-green-500 font-medium">Permitido</span>
                        </li>
                        <li className="flex items-center justify-between border-b pb-2">
                          <span>Configurar integrações</span>
                          <span className="text-green-500 font-medium">Permitido</span>
                        </li>
                        <li className="flex items-center justify-between border-b pb-2">
                          <span>Acessar dados sensíveis</span>
                          <span className="text-green-500 font-medium">Permitido</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Exportar dados</span>
                          <span className="text-green-500 font-medium">Permitido</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-2">
                      <h3 className="text-base font-medium mb-2">Últimos Acessos</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-start text-sm">
                          <div>
                            <p className="font-medium">São Paulo, Brasil</p>
                            <p className="text-muted-foreground">Chrome em Windows</p>
                          </div>
                          <p className="text-muted-foreground">Hoje, 14:25</p>
                        </div>
                        <div className="flex justify-between items-start text-sm">
                          <div>
                            <p className="font-medium">São Paulo, Brasil</p>
                            <p className="text-muted-foreground">App Mobile</p>
                          </div>
                          <p className="text-muted-foreground">Ontem, 09:12</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
