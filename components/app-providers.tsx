// components/app-providers.tsx (NOUVEAU CONTENU)

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { ClusterProvider } from './cluster/cluster-provider'
import { SolanaProvider } from '@/components/solana/solana-provider'
import { AuthProvider } from '@/components/auth/auth-provider'
import { Provider as PaperProvider } from 'react-native-paper'; // <-- NOUVEL IMPORT DE PAPER
import { theme } from '../constants/theme'; // <-- NOUVEL IMPORT DE VOTRE THÈME BRUTALISTE

const queryClient = new QueryClient()

export function AppProviders({ children }: PropsWithChildren) {
  return (
    // Remplacez l'ancien <AppTheme> par le PaperProvider
    <PaperProvider theme={theme}> 
      <QueryClientProvider client={queryClient}>
        <ClusterProvider>
          <SolanaProvider>
            <AuthProvider>{children}</AuthProvider>
          </SolanaProvider>
        </ClusterProvider>
      </QueryClientProvider>
    </PaperProvider>
  )
}

// NOTE: Vous pouvez supprimer le composant AppTheme du système de fichiers
// si vous souhaitez nettoyer le projet, mais le laisser ne causera pas de problème.
