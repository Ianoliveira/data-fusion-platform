
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NaturalQuerySection } from "@/components/dashboard/NaturalQuerySection";
import { MessageSquareText } from "lucide-react";

const Chatbot = () => {
  return (
    <>
      <Helmet>
        <title>Consulta Natural - Twiggy.ai</title>
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
        </div>
      </div>
    </>
  );
};

export default Chatbot;
