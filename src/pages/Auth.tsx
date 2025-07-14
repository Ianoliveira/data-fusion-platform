
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    if (!email || !password) {
      setError("Email e senha são obrigatórios");
      return false;
    }
    
    if (isSignUp && !fullName) {
      setError("Nome completo é obrigatório para criar conta");
      return false;
    }
    
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return false;
    }
    
    return true;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      console.log('Attempting signup for:', email);
      
      const { data, error: signupError } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: fullName.trim()
          },
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (signupError) {
        console.error('Signup error:', signupError);
        setError(signupError.message);
        toast({
          variant: "destructive",
          title: "Erro no cadastro",
          description: signupError.message,
        });
      } else {
        console.log('Signup successful:', data);
        toast({
          title: "Cadastro realizado",
          description: "Verifique seu email para confirmar a conta",
        });
        
        // If user is immediately confirmed, they will be redirected by AuthWrapper
        if (data.user && !data.user.email_confirmed_at) {
          // User needs to confirm email
          setError("Verifique seu email para ativar a conta");
        }
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Ocorreu um erro inesperado");
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro inesperado",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      console.log('Attempting signin for:', email);
      
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (signInError) {
        console.error('Signin error:', signInError);
        let errorMessage = signInError.message;
        
        // Provide more user-friendly error messages
        if (signInError.message === 'Invalid login credentials') {
          errorMessage = 'Email ou senha incorretos';
        } else if (signInError.message === 'Email not confirmed') {
          errorMessage = 'Por favor, confirme seu email antes de fazer login';
        }
        
        setError(errorMessage);
        toast({
          variant: "destructive",
          title: "Erro no login",
          description: errorMessage,
        });
      } else if (data.user) {
        console.log('Signin successful:', data.user.email);
        toast({
          title: "Login realizado",
          description: "Bem-vindo de volta!",
        });
        // Redirection will be handled by AuthWrapper
      }
    } catch (err) {
      console.error("Signin error:", err);
      setError("Ocorreu um erro inesperado");
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro inesperado",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20">
      <div className="w-full max-w-md p-8 space-y-6 bg-background rounded-xl shadow-lg border">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            {isSignUp ? 'Criar Conta' : 'Entrar no DataFusion'}
          </h1>
          <p className="text-muted-foreground">
            {isSignUp 
              ? 'Preencha os dados abaixo para criar sua conta'
              : 'Entre com seu email e senha'
            }
          </p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form className="space-y-4" onSubmit={isSignUp ? handleSignUp : handleSignIn}>
          {isSignUp && (
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Nome completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
                required={isSignUp}
              />
            </div>
          )}
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
              minLength={6}
            />
          </div>
          <div className="space-y-4 pt-2">
            <Button
              className="w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Carregando...' : (isSignUp ? 'Criar Conta' : 'Entrar')}
            </Button>
            <Button
              className="w-full"
              variant="outline"
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
                setEmail('');
                setPassword('');
                setFullName('');
              }}
              disabled={loading}
            >
              {isSignUp ? 'Já tem conta? Entrar' : 'Criar nova conta'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
