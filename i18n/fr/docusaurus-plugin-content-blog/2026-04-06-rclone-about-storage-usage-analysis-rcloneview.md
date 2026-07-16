---
slug: rclone-about-storage-usage-analysis-rcloneview
title: "Analyser l'utilisation du stockage cloud et les quotas avec RcloneView"
authors:
  - tayson
description: "Surveillez l'utilisation du stockage cloud, vérifiez les quotas, identifiez les dossiers volumineux et planifiez la capacité sur plusieurs fournisseurs grâce au tableau de bord de RcloneView et à la commande rclone about."
keywords:
  - rclone about storage usage
  - cloud storage quota monitor
  - rcloneview storage analysis
  - check cloud storage space
  - cloud capacity planning
  - storage usage per remote
  - rclone disk usage
  - cloud quota monitoring tool
  - compare cloud storage usage
  - rcloneview dashboard storage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - dashboard
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Analyser l'utilisation du stockage cloud et les quotas avec RcloneView

> Avant de pouvoir optimiser les coûts liés au cloud, vous devez savoir exactement où va votre espace de stockage. RcloneView regroupe les données d'utilisation et les informations de quota de chaque distant connecté en un seul endroit.

La plupart des coûts de stockage cloud sont liés au volume. Que vous payiez au gigaoctet sur S3, que vous restiez dans un forfait gratuit sur Google Drive, ou que vous partagiez un quota d'équipe sur OneDrive, savoir combien d'espace chaque distant consomme est essentiel pour maîtriser les coûts et planifier la capacité. La commande `about` de rclone interroge l'API d'un fournisseur pour obtenir l'espace total, utilisé, libre et mis à la corbeille. RcloneView affiche ces informations de façon visuelle afin que vous puissiez surveiller tous vos distants sans passer d'un tableau de bord de fournisseur à un autre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que rapporte rclone about

La commande `rclone about` renvoie des métriques de stockage directement depuis l'API du fournisseur. Une réponse typique comprend :

| Métrique | Description |
|--------|-------------|
| **Total** | Quota de stockage total alloué au compte |
| **Utilisé** | Espace actuellement occupé par les fichiers |
| **Libre** | Espace disponible restant |
| **Corbeille** | Espace utilisé par les éléments dans la corbeille |
| **Autre** | Espace utilisé par d'autres services (par exemple Gmail pour les comptes Google) |

Tous les fournisseurs ne rapportent pas tous les champs. Les services compatibles S3, par exemple, ne rapportent souvent que l'espace utilisé, car les buckets n'ont pas de quota fixe. Google Drive rapporte les cinq champs, ce qui en fait l'un des plus complets.

## Consulter l'utilisation du stockage dans RcloneView

RcloneView offre une vue visuelle de vos distants connectés :

1. Ouvrez **RcloneView** et accédez au **tableau de bord** ou à l'**explorateur de distants**.
2. Sélectionnez le distant que vous souhaitez examiner.
3. Consultez le résumé de stockage indiquant l'espace utilisé, libre et total.

Pour une vérification rapide sur l'ensemble des distants, le tableau de bord vous offre une vue d'ensemble instantanée de la consommation de chaque fournisseur connecté.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote list showing connected cloud providers" class="img-large img-center" />

## Exécuter rclone about depuis le terminal

Pour obtenir des chiffres bruts ou pour du scripting, ouvrez le **terminal** dans RcloneView et exécutez :

```bash
rclone about gdrive:
```

Exemple de sortie :

```
Total:   15 GiB
Used:    9.2 GiB
Free:    5.8 GiB
Trashed: 1.4 GiB
Other:   3.1 GiB
```

Pour vérifier rapidement plusieurs distants :

```bash
rclone about gdrive:
rclone about onedrive:
rclone about s3-backup:
```

Utilisez `--json` pour obtenir une sortie exploitable par des scripts :

```bash
rclone about gdrive: --json
```

## Identifier les dossiers volumineux

Connaître l'utilisation totale est un bon début. Pour repérer les dossiers qui consomment le plus d'espace, il faut utiliser la commande `rclone size` :

```bash
rclone size gdrive:/Photos
```

Cette commande renvoie le nombre total et la taille de tous les fichiers du chemin spécifié. Pour trouver vos dossiers les plus volumineux, exécutez-la sur les répertoires de premier niveau et comparez les résultats.

Dans l'**explorateur** de RcloneView, vous pouvez parcourir n'importe quel distant et voir la taille des dossiers au fur et à mesure de votre navigation, ce qui permet de repérer facilement les gros consommateurs d'espace sans exécuter de commandes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer browsing cloud folders with size information" class="img-large img-center" />

## Surveillance des quotas selon les fournisseurs

Les différents fournisseurs gèrent les quotas de manière différente :

| Fournisseur | Modèle de quota | Remarques |
|----------|------------|-------|
| **Google Drive** | Partagé entre Drive, Gmail, Photos | 15 Go gratuits ; les forfaits Workspace varient |
| **OneDrive** | Allocation par utilisateur | 5 Go gratuits ; les forfaits Microsoft 365 offrent 1 To et plus |
| **Dropbox** | Quota par compte | 2 Go gratuits ; l'offre Plus propose 2 To |
| **Backblaze B2** | Paiement à l'usage, pas de quota fixe | Facturé mensuellement par Go stocké |
| **Amazon S3** | Paiement à l'usage, pas de quota fixe | Tarification par palier selon la classe de stockage |
| **pCloud** | Quota à vie ou par abonnement | 10 Go gratuits ; forfaits à vie disponibles |

Pour les fournisseurs facturés à l'usage comme S3 et B2, il n'y a pas de quota à atteindre, mais surveiller l'utilisation permet de maîtriser directement votre facture. Pour les fournisseurs basés sur un quota, manquer d'espace interrompt silencieusement les synchronisations et les sauvegardes.

## Planifier la capacité et estimer les coûts

Utilisez les données d'utilisation du stockage pour anticiper :

1. **Suivre la croissance dans le temps** -- exécutez `rclone about` périodiquement et consignez les résultats. Un simple tableur suivant l'utilisation mensuelle par distant révèle les tendances.
2. **Estimer les coûts mensuels** pour les fournisseurs facturés à l'usage :
   - Backblaze B2 : 0,006 $/Go/mois pour le stockage
   - Amazon S3 Standard : 0,023 $/Go/mois
   - Wasabi : 0,0069 $/Go/mois (1 To minimum)
3. **Définir des alertes** -- si un distant basé sur un quota dépasse 80 % d'utilisation, prévoyez un nettoyage ou une mise à niveau.
4. **Comparer les fournisseurs** -- si un distant est moins cher au Go, envisagez d'y migrer les données froides.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare storage consumption across cloud providers" class="img-large img-center" />

## Récupérer de l'espace depuis la corbeille

L'un des consommateurs de stockage les plus souvent négligés est la corbeille. Google Drive et OneDrive comptent tous deux les fichiers mis à la corbeille dans votre quota. La sortie de `rclone about` affiche explicitement l'espace occupé par la corbeille, et vous pouvez le récupérer avec :

```bash
rclone cleanup gdrive:
```

Dans RcloneView, cette opération est accessible via l'interface sans avoir à saisir de commandes. Vider la corbeille est souvent le moyen le plus rapide de libérer des gigaoctets sans supprimer de fichiers actifs.

## Comparer l'utilisation entre les fournisseurs

Lorsque vous gérez plusieurs comptes cloud, une comparaison entre fournisseurs aide à prendre des décisions comme :

- **Où stocker les nouvelles sauvegardes** -- diriger les données vers le distant disposant du plus d'espace disponible.
- **Quel fournisseur faire évoluer** -- si les coûts S3 augmentent plus vite que ceux de B2, cherchez pourquoi.
- **Quand archiver** -- déplacer les données rarement consultées d'un stockage coûteux vers un niveau moins cher.

Le tableau de bord multi-distant de RcloneView rend cette comparaison immédiate. Au lieu de vous connecter à trois tableaux de bord de fournisseurs différents, vous voyez toutes les données d'utilisation dans une seule interface.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView dashboard showing multiple remote storage status" class="img-large img-center" />

## Bonnes pratiques

- **Vérifiez les quotas avant de lancer de gros transferts** -- une destination pleine provoquera des échecs silencieux.
- **Surveillez l'utilisation de la corbeille** et videz-la régulièrement pour éviter une consommation fantôme du quota.
- **Consignez l'utilisation chaque mois** pour le suivi des coûts et l'analyse des tendances.
- **Utilisez `rclone size`** sur des dossiers spécifiques pour repérer les plus gros consommateurs d'espace.
- **Automatisez les vérifications** en enregistrant des commandes `rclone about` comme tâches planifiées dans RcloneView.

---

**Guides connexes :**

- [Nettoyer le stockage cloud : vider la corbeille et supprimer les anciennes versions](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Comparatif Wasabi vs Backblaze B2 vs IDrive e2](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Google Drive vs OneDrive pour les entreprises](https://rcloneview.com/support/blog/google-drive-vs-onedrive-for-business-rcloneview)

<CloudSupportGrid />
