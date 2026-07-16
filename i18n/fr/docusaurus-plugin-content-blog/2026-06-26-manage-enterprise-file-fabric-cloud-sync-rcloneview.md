---
slug: manage-enterprise-file-fabric-cloud-sync-rcloneview
title: "Gérer le stockage Enterprise File Fabric — Synchroniser et sauvegarder vos fichiers avec RcloneView"
authors:
  - morgan
description: "Connectez, synchronisez et sauvegardez votre stockage Enterprise File Fabric avec RcloneView — l'interface multi-cloud multiplateforme basée sur rclone pour Windows, macOS et Linux."
keywords:
  - Enterprise File Fabric RcloneView
  - synchroniser Enterprise File Fabric
  - synchronisation cloud Enterprise File Fabric
  - sauvegarde Enterprise File Fabric
  - gérer les fichiers Enterprise File Fabric
  - gestion du stockage cloud en entreprise
  - RcloneView stockage entreprise
  - client GUI Enterprise File Fabric
tags:
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Enterprise File Fabric — Synchroniser et sauvegarder vos fichiers avec RcloneView

> RcloneView se connecte directement à Enterprise File Fabric, vous permettant de parcourir, synchroniser et sauvegarder le stockage de fichiers géré de votre organisation sans écrire la moindre commande CLI.

Enterprise File Fabric est une plateforme de services de contenu cloud utilisée par les organisations qui doivent consolider des backends de stockage disparates sous une seule couche de gouvernance. Que votre équipe y stocke des fichiers de projet, des registres de conformité ou des ressources numériques partagées, garder ce contenu synchronisé et sauvegardé nécessite un outil fiable et capable de fonctionner sur plusieurs clouds. RcloneView — un client GUI basé sur Flutter et construit sur rclone — gère Enterprise File Fabric aux côtés de plus de 90 autres fournisseurs cloud depuis une interface unifiée sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Enterprise File Fabric dans RcloneView

Ajouter Enterprise File Fabric comme distant ne prend que quelques minutes grâce à l'assistant intégré de nouveau distant de RcloneView. Ouvrez l'onglet **Remote**, cliquez sur **New Remote**, puis sélectionnez Enterprise File Fabric dans la liste des fournisseurs. Saisissez l'URL de votre endpoint et votre jeton API — les mêmes identifiants que ceux utilisés par votre organisation pour l'accès à l'API — puis enregistrez. Le distant apparaît immédiatement dans le panneau d'exploration, où vous pouvez parcourir les dossiers, consulter le nombre et la taille des fichiers, et copier les chemins directement depuis la barre de navigation.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Enterprise File Fabric remote in RcloneView" class="img-large img-center" />

Contrairement aux outils de montage seul, RcloneView permet aussi de synchroniser et comparer des dossiers avec la licence GRATUITE, afin que vous puissiez aller au-delà du simple mappage de lecteur et gérer activement votre contenu Enterprise File Fabric sur l'ensemble de vos environnements cloud.

## Synchroniser Enterprise File Fabric vers d'autres destinations cloud

Un scénario courant avec Enterprise File Fabric consiste à répliquer le contenu géré vers une destination cloud secondaire à des fins de reprise après sinistre ou d'archivage à long terme. Dans l'assistant de synchronisation de RcloneView, définissez Enterprise File Fabric comme source et choisissez n'importe quelle destination — Amazon S3, Backblaze B2, Google Drive, ou un serveur SFTP sur site. L'assistant en 4 étapes vous guide à travers la concurrence des transferts, la vérification des sommes de contrôle et les filtres d'ancienneté des fichiers, afin que vous ne déplaciez que ce dont vous avez besoin.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Enterprise File Fabric in RcloneView" class="img-large img-center" />

Exécutez toujours un **Dry Run** avant le transfert réel. RcloneView listera précisément les fichiers qu'il copierait ou ignorerait, vous permettant d'affiner vos règles de filtrage avant qu'un seul octet ne soit déplacé. Pour une réplication 1:N — miroir du même dossier Enterprise File Fabric vers plusieurs destinations simultanément — ajoutez simplement des chemins de destination supplémentaires à l'étape 1. Cette fonctionnalité est disponible avec la licence GRATUITE, sans limite sur le nombre de destinations.

## Planifier des sauvegardes automatisées

Les organisations utilisant Enterprise File Fabric ont souvent besoin de fenêtres de sauvegarde nocturnes ou hebdomadaires s'exécutant sans intervention humaine. La **licence PLUS** débloque la planification de type crontab directement dans RcloneView. Configurez les champs minute, heure, jour de la semaine et mois pour déclencher vos tâches de synchronisation Enterprise File Fabric selon la fréquence souhaitée. L'outil intégré **Simulate schedule** prévisualise les prochaines exécutions afin que vous puissiez confirmer le calendrier avant validation.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an Enterprise File Fabric backup job in RcloneView" class="img-large img-center" />

Les notifications de fin de tâche tiennent les équipes opérationnelles informées, même lorsque l'application s'exécute réduite dans la barre système.

## Suivre l'historique des transferts et les pistes d'audit

Chaque tâche de synchronisation Enterprise File Fabric est consignée dans la vue **Job History** de RcloneView, avec l'heure de début, la durée, la vitesse de transfert, le nombre de fichiers et le statut final. Filtrez l'historique par plage de dates ou par résultat pour vérifier la conformité aux SLA et auditer les mouvements de données — une fonctionnalité pratique pour les organisations ayant des exigences de rétention ou de gouvernance concernant leur plateforme de stockage de fichiers gérée.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Enterprise File Fabric transfers in RcloneView" class="img-large img-center" />

L'onglet terminal rclone intégré à RcloneView permet également aux utilisateurs avancés d'exécuter des commandes `rclone` personnalisées sur leur distant Enterprise File Fabric sans quitter l'interface graphique — utile pour des requêtes ponctuelles ou des opérations exceptionnelles.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet **Remote**, cliquez sur **New Remote**, puis sélectionnez Enterprise File Fabric.
3. Saisissez l'URL de votre endpoint Enterprise File Fabric et votre jeton API, puis enregistrez le distant.
4. Créez une tâche de synchronisation, définissez votre destination de sauvegarde préférée, et exécutez d'abord un **Dry Run**.
5. (PLUS) Activez l'exécution planifiée pour automatiser les sauvegardes continues avec des alertes par e-mail ou Slack.

Centraliser la gestion d'Enterprise File Fabric dans RcloneView élimine la dispersion des outils et offre à votre équipe un registre unique et auditable de chaque mouvement de données cloud.

---

**Guides connexes :**

- [Gérer le stockage SharePoint avec RcloneView](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [Gérer Azure Files avec RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Stockage cloud pour les équipes DevOps et logicielles avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />
