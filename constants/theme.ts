// constants/theme.ts

import { DefaultTheme } from 'react-native-paper';

// Définition du Thème Brutaliste Noir et Vert (Monochrome Cypherpunk)
export const CypherpunkTheme = {
  ...DefaultTheme,
  
  // 1. Mise à jour des polices pour le look Terminal
  fonts: {
    ...DefaultTheme.fonts, 
    default: {
      fontFamily: 'monospace',
      fontWeight: 'normal',
    },
  },

  // 2. Définition des couleurs Cypherpunk
  colors: {
    ...DefaultTheme.colors, 
    
    // Fonds et Surfaces
    primary: '#00FF00',       // Vert Vif pour les actions et le texte principal
    onPrimary: '#000000',     
    background: '#000000',    // Arrière-plan Noir Pur
    surface: '#000000',       // Surfaces Noir Pur
    
    // Texte et Contraste
    onSurface: '#00FF00',     // Texte principal sur les surfaces noires (Vert Terminal)
    onBackground: '#00FF00',  // Texte principal sur le fond noir
    text: '#00FF00',          // Texte de base
    
    // Alertes et Rupture
    accent: '#FF0000',        // Rouge Pur (pour les messages d'erreur)
    error: '#FF0000',         
    
    placeholder: '#444444',
  },
} as const; 

// Export pour utilisation dans le fournisseur de thème
export const theme = CypherpunkTheme;
