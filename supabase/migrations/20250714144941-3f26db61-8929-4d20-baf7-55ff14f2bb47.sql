
-- Criar tabela de perfis de usuário
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  company TEXT,
  role TEXT DEFAULT 'user',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de integrações
CREATE TABLE public.integrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'crm', 'erp', 'analytics', 'ads', 'ecommerce'
  status TEXT DEFAULT 'pending', -- 'connected', 'error', 'pending'
  config JSONB,
  last_sync TIMESTAMP WITH TIME ZONE,
  data_points INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de insights
CREATE TABLE public.insights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  priority TEXT DEFAULT 'medium', -- 'high', 'medium', 'low'
  status TEXT DEFAULT 'new', -- 'new', 'viewed', 'actioned'
  data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de clientes
CREATE TABLE public.customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  external_id TEXT,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company TEXT,
  segments JSONB,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de modelos preditivos
CREATE TABLE public.predictive_models (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'churn', 'segmentation', 'recommendation'
  status TEXT DEFAULT 'training', -- 'training', 'active', 'inactive'
  accuracy FLOAT,
  config JSONB,
  results JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de automações
CREATE TABLE public.automations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  trigger_type TEXT NOT NULL,
  trigger_config JSONB,
  action_type TEXT NOT NULL,
  action_config JSONB,
  status TEXT DEFAULT 'active', -- 'active', 'inactive', 'paused'
  execution_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de jornadas do cliente
CREATE TABLE public.customer_journeys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE,
  journey_name TEXT NOT NULL,
  stage TEXT NOT NULL,
  events JSONB,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de conversas do chatbot
CREATE TABLE public.chatbot_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  session_id TEXT NOT NULL,
  messages JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS em todas as tabelas
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.predictive_models ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customer_journeys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chatbot_conversations ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Políticas RLS para integrations
CREATE POLICY "Users can view their own integrations" ON public.integrations
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own integrations" ON public.integrations
  FOR ALL USING (auth.uid() = user_id);

-- Políticas RLS para insights
CREATE POLICY "Users can view their own insights" ON public.insights
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own insights" ON public.insights
  FOR ALL USING (auth.uid() = user_id);

-- Políticas RLS para customers
CREATE POLICY "Users can view their own customers" ON public.customers
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own customers" ON public.customers
  FOR ALL USING (auth.uid() = user_id);

-- Políticas RLS para predictive_models
CREATE POLICY "Users can view their own models" ON public.predictive_models
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own models" ON public.predictive_models
  FOR ALL USING (auth.uid() = user_id);

-- Políticas RLS para automations
CREATE POLICY "Users can view their own automations" ON public.automations
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own automations" ON public.automations
  FOR ALL USING (auth.uid() = user_id);

-- Políticas RLS para customer_journeys
CREATE POLICY "Users can view their own journeys" ON public.customer_journeys
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own journeys" ON public.customer_journeys
  FOR ALL USING (auth.uid() = user_id);

-- Políticas RLS para chatbot_conversations
CREATE POLICY "Users can view their own conversations" ON public.chatbot_conversations
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own conversations" ON public.chatbot_conversations
  FOR ALL USING (auth.uid() = user_id);

-- Função para criar perfil automaticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (new.id, new.raw_user_meta_data ->> 'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criar perfil automaticamente
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
