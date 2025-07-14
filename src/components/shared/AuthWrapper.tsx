
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Session } from '@supabase/supabase-js';

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('AuthWrapper: Setting up auth listener');
    
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setSession(session);
        
        // Handle navigation based on auth state
        if (event === 'SIGNED_IN' && session) {
          console.log('User signed in, redirecting to home');
          navigate('/');
        } else if (event === 'SIGNED_OUT') {
          console.log('User signed out, redirecting to auth');
          navigate('/auth');
        }
      }
    );

    // Then check for existing session
    const checkSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
        }
        
        console.log('Initial session check:', session?.user?.email);
        setSession(session);
        
        // Handle initial navigation
        if (!session && location.pathname !== '/auth') {
          console.log('No session, redirecting to auth');
          navigate('/auth');
        } else if (session && location.pathname === '/auth') {
          console.log('Has session, redirecting to home');
          navigate('/');
        }
      } catch (error) {
        console.error('Session check error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    return () => {
      console.log('Cleaning up auth subscription');
      subscription.unsubscribe();
    };
  }, [navigate, location.pathname]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}
