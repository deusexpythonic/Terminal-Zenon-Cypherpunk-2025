// constants/app-config.tsx (Modification FINALE)

import { clusterApiUrl } from '@solana/web3.js'
import { Cluster } from '@/components/cluster/cluster'
import { ClusterNetwork } from '@/components/cluster/cluster-network'

export class AppConfig {
  static name = '1663'
  static uri = 'https://example.com'
  static clusters: Cluster[] = [
    {
      id: 'solana:devnet',
      name: 'Devnet',
      endpoint: clusterApiUrl('devnet'), // L'URL de l'API Devnet
      network: ClusterNetwork.Devnet,
    },
    // Nous supprimons Testnet et Mainnet pour le hackathon
  ]
}
