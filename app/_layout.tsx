// app/_layout.tsx (NOUVELLE APPROCHE MONOLITHIQUE)

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

// Importer les fournisseurs de contexte (nécessaires pour le MWA)
import { AppProviders } from '@/components/app-providers'; 

// Importer le composant Terminal Zénon directement
import TerminalScreen from './terminal'; 

// --- Fonction de Layout ---

export default function RootLayout() {
  return (
    // Utilisez les fournisseurs (Solana, Auth, Theme)
    <AppProviders> 
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        
        {/*
          NOTE : Nous plaçons le Terminal Zénon DIRECTEMENT ici.
          Ceci court-circuite le routeur et force l'affichage.
        */}
        <TerminalScreen /> 

        <StatusBar style="auto" />
      </View>
    </AppProviders>
  );
}
// Le RootNavigator n'est plus utilisé et peut être supprimé s'il est en bas.
