
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, FileUp, Download, RefreshCw, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const DataLake = () => {
  const dataFiles = [
    { name: "customer_data_2024.csv", source: "CRM", records: 15243, updated: "2024-03-25", status: "Processado" },
    { name: "transactions_q1_2024.json", source: "E-commerce", records: 54876, updated: "2024-03-28", status: "Processado" },
    { name: "marketing_campaigns.csv", source: "Marketing", records: 124, updated: "2024-03-20", status: "Processado" },
    { name: "inventory_status.json", source: "ERP", records: 1205, updated: "2024-03-29", status: "Processado" },
    { name: "support_tickets.csv", source: "Helpdesk", records: 3421, updated: "2024-03-27", status: "Processando" },
    { name: "social_media_metrics.json", source: "Social Media", records: 8652, updated: "2024-03-26", status: "Falha" },
    { name: "newsletter_subscribers.csv", source: "Email Marketing", records: 28954, updated: "2024-03-24", status: "Processado" },
    { name: "web_analytics_march.csv", source: "Google Analytics", records: 125487, updated: "2024-03-30", status: "Processando" }
  ];

  return (
    <>
      <Helmet>
        <title>Data Lake - Twiggy.ai</title>
      </Helmet>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center">
              <Database className="mr-2 h-6 w-6 text-primary" />
              Data Lake
            </h1>
            <p className="text-muted-foreground">
              Repositório centralizado de todos os dados brutos da plataforma
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <RefreshCw className="h-4 w-4" />
              Atualizar
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button size="sm" className="gap-1">
              <FileUp className="h-4 w-4" />
              Importar Dados
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Fontes de Dados</CardTitle>
            <CardDescription>
              Lista de todos os arquivos de dados importados e processados na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar arquivos..." 
                  className="pl-8 w-full"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" />
                  Filtrar
                </Button>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome do Arquivo</TableHead>
                  <TableHead>Fonte de Dados</TableHead>
                  <TableHead className="text-right">Registros</TableHead>
                  <TableHead>Última Atualização</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataFiles.map((file, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{file.name}</TableCell>
                    <TableCell>{file.source}</TableCell>
                    <TableCell className="text-right">{file.records.toLocaleString()}</TableCell>
                    <TableCell>{file.updated}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`
                          ${file.status === "Processado" ? "bg-green-500/10 text-green-500 border-green-500/30" : ""}
                          ${file.status === "Processando" ? "bg-blue-500/10 text-blue-500 border-blue-500/30" : ""}
                          ${file.status === "Falha" ? "bg-red-500/10 text-red-500 border-red-500/30" : ""}
                        `}
                      >
                        {file.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Visualizar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Armazenamento</CardTitle>
              <CardDescription>
                Informações sobre o uso de armazenamento no Data Lake
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Espaço Utilizado</span>
                    <span className="font-medium">324.5 GB / 1 TB</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: "32.45%" }}
                    />
                  </div>
                </div>
                
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Arquivos CSV</p>
                    <p className="text-xl font-medium">142.3 GB</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Arquivos JSON</p>
                    <p className="text-xl font-medium">182.2 GB</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total de Arquivos</p>
                    <p className="text-xl font-medium">243</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Registros Totais</p>
                    <p className="text-xl font-medium">237.9M</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Processamento de Dados</CardTitle>
              <CardDescription>
                Status das operações de processamento de dados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Integração Diária</span>
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">
                      Concluído
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Última execução: Hoje às 04:30</span>
                    <span className="text-sm text-muted-foreground">Duração: 12 min</span>
                  </div>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Processamento de Analytics</span>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30">
                      Em Andamento
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Iniciado: Hoje às 10:15</span>
                    <span className="text-sm text-muted-foreground">Progresso: 65%</span>
                  </div>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Limpeza de Dados</span>
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">
                      Concluído
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Última execução: Ontem às 22:00</span>
                    <span className="text-sm text-muted-foreground">Duração: 45 min</span>
                  </div>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Treinamento de Modelos</span>
                    <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/30">
                      Falha
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Tentativa: Ontem às 23:30</span>
                    <span className="text-sm text-muted-foreground">Erro: Dados incompletos</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DataLake;
