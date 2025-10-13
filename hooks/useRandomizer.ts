// hooks/useRandomizer.ts

import { FRAGMENTS_DATA, AXES } from '../utils/fragments';

// Définition des types pour garantir la cohérence
type RandomizationMode = 'Thématique' | 'Contrasté' | 'Chaos';
type FragmentSet = { appel: string; epreuve: string; retour: string; axe?: string };

// Fonction utilitaire pour obtenir un élément aléatoire d'un tableau
const getRandomElement = <T>(array: T[]): T => 
  array[Math.floor(Math.random() * array.length)];

/**
 * Hook pour générer les fragments narratifs selon le mode de randomisation.
 */
export const useRandomizer = (mode: RandomizationMode): FragmentSet => {
    let appel: string, epreuve: string, retour: string;
    
    // --- MODE THÉMATIQUE (Même axe pour les 3 étapes) ---
    if (mode === 'Thématique') {
        const selectedAxe = getRandomElement(AXES);
        const fragments = FRAGMENTS_DATA[selectedAxe];
        
        appel = getRandomElement(fragments.Appels);
        epreuve = getRandomElement(fragments.Épreuves);
        retour = getRandomElement(fragments.Retours);
        
        // Retourne l'axe pour affichage/débogage si nécessaire
        return { appel, epreuve, retour, axe: selectedAxe };
    }

    // --- MODE CONTRASTÉ (3 axes différents) ---
    if (mode === 'Contrasté') {
        // Crée une copie des axes pour tirer 3 éléments sans répétition
        const axesCopy = [...AXES]; 
        
        // Sélectionne les 3 axes distincts
        const axeAppel = axesCopy.splice(Math.floor(Math.random() * axesCopy.length), 1)[0];
        const axeEpreuve = axesCopy.splice(Math.floor(Math.random() * axesCopy.length), 1)[0];
        const axeRetour = axesCopy.splice(Math.floor(Math.random() * axesCopy.length), 1)[0];
        
        appel = getRandomElement(FRAGMENTS_DATA[axeAppel].Appels);
        epreuve = getRandomElement(FRAGMENTS_DATA[axeEpreuve].Épreuves);
        retour = getRandomElement(FRAGMENTS_DATA[axeRetour].Retours);
        
        return { appel, epreuve, retour };
    }

    // --- MODE CHAOS (Aléatoire total) ---
    if (mode === 'Chaos') {
        // Sélectionne aléatoirement un axe pour chaque étape, sans contrainte
        const axeAppel = getRandomElement(AXES);
        const axeEpreuve = getRandomElement(AXES);
        const axeRetour = getRandomElement(AXES);

        appel = getRandomElement(FRAGMENTS_DATA[axeAppel].Appels);
        epreuve = getRandomElement(FRAGMENTS_DATA[axeEpreuve].Épreuves);
        retour = getRandomElement(FRAGMENTS_DATA[axeRetour].Retours);
        
        return { appel, epreuve, retour };
    }
    
    // Fallback minimaliste en cas de mode inconnu
    return { appel: "> ERREUR DE MODE.", epreuve: "> REDÉMARREZ LE PROTOCOLE.", retour: "> LE VOID EST INCOMPLET." };
};
