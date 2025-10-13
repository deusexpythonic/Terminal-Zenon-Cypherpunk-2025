// app/(tabs)/account/index.tsx (CORRECTION DÉFINITIVE)

import { Redirect } from 'expo-router';
// Importation nommée du fichier use-mobile-wallet
import { useMobileWallet } from '@/components/solana/use-mobile-wallet';

export default function AccountScreen() {
  // On appelle la fonction useMobileWallet, qui devrait retourner l'objet avec 'connected'
  // NOTE: La fonction s'appelle useMobileWallet, mais elle est utilisée comme le hook de la wallet.
  const walletContext = useMobileWallet(); 

  // On accède à la propriété 'connected' du contexte du portefeuille
  // Si elle n'existe pas, on accède à la propriété 'connected' du contexte du portefeuille.
  // La plupart des hooks retournent un objet { connected: bool, signMessages: func, ... }
  const connected = walletContext.connected || false;

  // Redirection immédiate vers l'écran de quête (Terminal Zénon) si connecté
  if (connected) {
    return <Redirect href="/" />;
  }

  // Redirige vers l'écran de connexion si déconnecté
  return <Redirect href="/sign-in" />;
}
