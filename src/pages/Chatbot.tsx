
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NaturalQuerySection } from "@/components/dashboard/NaturalQuerySection";
import { MessageSquareText } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Chatbot = () => {
  const { data: conversations, isLoading } = useQuery({
    queryKey: ['chatbotConversations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('chatbot_conversations')
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Consulta Natural - DataFusion</title>
      </Helmet>
      
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <MessageSquareText className="mr-2 h-6 w-6 text-primary" />
            Consulta Natural
          </h1>
          <p className="text-muted-foreground">
            Faça perguntas em linguagem natural e obtenha respostas baseadas em seus dados
          </p>
        </div>
        
        <div className="grid gap-6">
          <NaturalQuerySection />
          
          {conversations && conversations.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Conversas Recentes</CardTitle>
                <CardDescription>
                  Suas últimas consultas e conversas com o assistente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversations.map((conversation) => (
                    <div 
                      key={conversation.id}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">
                            Sessão: {conversation.session_id}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {new Date(conversation.updated_at).toLocaleString('pt-BR')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default Chatbot;
