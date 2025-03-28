
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart, AreaChart } from "@/components/ui/chart";
import { Sparkles, SendHorizonal, Download, RefreshCw } from "lucide-react";

export function NaturalQuerySection() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    type: 'chart' | 'text';
    title: string;
    data?: any;
    text?: string;
  }>(null);

  const exampleQueries = [
    "Qual o desempenho de vendas por categoria nos últimos 3 meses?",
    "Comparar ROI entre canais de marketing",
    "Quais produtos tiveram mais devoluções?",
    "Quem são os clientes com maior valor vitalício?"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (query.toLowerCase().includes('desempenho') || query.toLowerCase().includes('venda')) {
        setResult({
          type: 'chart',
          title: 'Desempenho de Vendas por Categoria (Últimos 3 Meses)',
          data: [
            { name: "Eletrônicos", Maio: 4000, Junho: 3000, Julho: 5000 },
            { name: "Vestuário", Maio: 3000, Junho: 2000, Julho: 3500 },
            { name: "Casa & Decoração", Maio: 2000, Junho: 3500, Julho: 4200 },
            { name: "Esportes", Maio: 2780, Junho: 3908, Julho: 2500 },
            { name: "Beleza", Maio: 1890, Junho: 2800, Julho: 3300 },
          ]
        });
      } else if (query.toLowerCase().includes('roi') || query.toLowerCase().includes('marketing')) {
        setResult({
          type: 'chart',
          title: 'ROI por Canal de Marketing (Últimos 6 Meses)',
          data: [
            { name: "Jan", Google: 4.2, Meta: 2.8, TikTok: 1.5 },
            { name: "Fev", Google: 3.8, Meta: 2.9, TikTok: 1.8 },
            { name: "Mar", Google: 4.5, Meta: 3.1, TikTok: 2.2 },
            { name: "Abr", Google: 4.3, Meta: 3.4, TikTok: 2.5 },
            { name: "Mai", Google: 4.1, Meta: 3.6, TikTok: 3.1 },
            { name: "Jun", Google: 4.6, Meta: 3.8, TikTok: 3.5 },
          ]
        });
      } else {
        setResult({
          type: 'text',
          title: 'Resultado da consulta',
          text: `Baseado na sua pergunta "${query}", encontramos os seguintes insights:
          
1. Os dados dos últimos 6 meses mostram uma tendência de crescimento de 15% nas vendas online;
2. Os clientes da região Sudeste têm demonstrado maior engajamento com as campanhas promocionais;
3. Os produtos com maior valor de compra média são os da categoria "Tecnologia";
4. Recomendamos intensificar campanhas em Meta Ads durante os finais de semana, com base no histórico de conversões.`
        });
      }
      
      setLoading(false);
    }, 1500);
  };

  const selectExample = (example: string) => {
    setQuery(example);
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-primary" />
          Consulta em Linguagem Natural
        </CardTitle>
        <CardDescription>
          Faça perguntas sobre seus dados e obtenha respostas instantâneas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="relative mb-6">
          <Input
            placeholder="Ex: Qual o desempenho de vendas por categoria nos últimos 3 meses?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pr-24"
          />
          <Button 
            type="submit" 
            size="sm" 
            className="absolute right-1.5 top-1/2 transform -translate-y-1/2"
            disabled={loading || !query.trim()}
          >
            {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <SendHorizonal className="h-4 w-4" />}
            <span className="ml-1">Enviar</span>
          </Button>
        </form>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-sm text-muted-foreground mr-2">Experimente:</span>
          {exampleQueries.map((example, index) => (
            <Button 
              key={index} 
              variant="outline" 
              size="sm" 
              onClick={() => selectExample(example)}
            >
              {example}
            </Button>
          ))}
        </div>
        
        {result && (
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-lg">{result.title}</h3>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Exportar
              </Button>
            </div>
            
            {result.type === 'chart' && result.data && (
              <div className="h-[300px]">
                {result.title.includes('ROI') ? (
                  <AreaChart
                    data={result.data}
                    categories={["Google", "Meta", "TikTok"]}
                    index="name"
                    colors={["#3b82f6", "#8b5cf6", "#f43f5e"]}
                    valueFormatter={(value) => `${value}x`}
                    className="h-[300px]"
                  />
                ) : (
                  <BarChart
                    data={result.data}
                    categories={["Maio", "Junho", "Julho"]}
                    index="name"
                    colors={["#3b82f6", "#8b5cf6", "#f43f5e"]}
                    valueFormatter={(value) => `R$ ${value}`}
                    className="h-[300px]"
                  />
                )}
              </div>
            )}
            
            {result.type === 'text' && result.text && (
              <div className="whitespace-pre-line text-sm">
                {result.text}
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        A consulta em linguagem natural utiliza IA para interpretar suas perguntas e gerar visualizações relevantes.
      </CardFooter>
    </Card>
  );
}
