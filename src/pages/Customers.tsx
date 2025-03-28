
import { Helmet } from "react-helmet";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Search, 
  MoreVertical, 
  Filter, 
  UserRound, 
  Download,
  Plus
} from "lucide-react";

// Mock customer data
const customers = [
  {
    id: "1",
    name: "Carolina Silva",
    email: "carolina.silva@example.com",
    segment: "VIP",
    lastPurchase: "2023-03-20",
    totalSpent: "R$ 4.850,00",
    status: "active"
  },
  {
    id: "2",
    name: "Ricardo Mendes",
    email: "ricardo.m@example.com",
    segment: "Regular",
    lastPurchase: "2023-03-15",
    totalSpent: "R$ 1.200,00",
    status: "active"
  },
  {
    id: "3",
    name: "Amanda Souza",
    email: "amanda.souza@example.com",
    segment: "Novo",
    lastPurchase: "2023-03-10",
    totalSpent: "R$ 450,00",
    status: "inactive"
  },
  {
    id: "4",
    name: "Marcos Oliveira",
    email: "m.oliveira@example.com",
    segment: "VIP",
    lastPurchase: "2023-03-05",
    totalSpent: "R$ 3.250,00",
    status: "active"
  },
  {
    id: "5",
    name: "Juliana Costa",
    email: "j.costa@example.com",
    segment: "Regular",
    lastPurchase: "2023-02-28",
    totalSpent: "R$ 950,00",
    status: "active"
  },
  {
    id: "6",
    name: "Pedro Santos",
    email: "p.santos@example.com",
    segment: "VIP",
    lastPurchase: "2023-02-25",
    totalSpent: "R$ 2.700,00",
    status: "inactive"
  },
  {
    id: "7",
    name: "Fernanda Lima",
    email: "f.lima@example.com",
    segment: "Regular",
    lastPurchase: "2023-02-20",
    totalSpent: "R$ 1.350,00",
    status: "active"
  }
];

// Customer segments summary
const segmentSummary = [
  { name: "VIP", count: 3, revenue: "R$ 10.800,00" },
  { name: "Regular", count: 3, revenue: "R$ 3.500,00" },
  { name: "Novo", count: 1, revenue: "R$ 450,00" }
];

const CustomerStatusBadge = ({ status }: { status: string }) => {
  if (status === "active") {
    return <Badge className="bg-green-500 hover:bg-green-600">Ativo</Badge>;
  }
  return <Badge variant="outline" className="text-muted-foreground">Inativo</Badge>;
};

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.segment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Clientes | Twiggy.ai - Customer Data Platform</title>
      </Helmet>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
          <p className="text-muted-foreground">
            Gerencie e analise seus clientes para impulsionar estratégias de retenção e crescimento.
          </p>
        </div>

        {/* Customer Metrics */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Clientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customers.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                +12% em relação ao último mês
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Valor Médio por Cliente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 2.107,14</div>
              <p className="text-xs text-muted-foreground mt-1">
                +5% em relação ao último mês
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Taxa de Retenção
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72%</div>
              <p className="text-xs text-muted-foreground mt-1">
                +3% em relação ao último mês
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Customer Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="all">Todos os Clientes</TabsTrigger>
              <TabsTrigger value="segments">Segmentos</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar cliente..."
                  className="pl-8 w-[250px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Adicionar Cliente
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Segmento</TableHead>
                      <TableHead>Última Compra</TableHead>
                      <TableHead>Total Gasto</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCustomers.map(customer => (
                      <TableRow key={customer.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                              <UserRound className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">{customer.name}</div>
                              <div className="text-sm text-muted-foreground">{customer.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{customer.segment}</TableCell>
                        <TableCell>{customer.lastPurchase}</TableCell>
                        <TableCell>{customer.totalSpent}</TableCell>
                        <TableCell>
                          <CustomerStatusBadge status={customer.status} />
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Ações</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                              <DropdownMenuItem>Editar Cliente</DropdownMenuItem>
                              <DropdownMenuItem>Histórico de Compras</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                Desativar Cliente
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="segments" className="mt-0">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Segmento</TableHead>
                      <TableHead>Total de Clientes</TableHead>
                      <TableHead>Receita Total</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {segmentSummary.map((segment, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="font-medium">{segment.name}</div>
                        </TableCell>
                        <TableCell>{segment.count}</TableCell>
                        <TableCell>{segment.revenue}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Ver Clientes
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Customers;
