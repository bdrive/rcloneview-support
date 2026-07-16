---
slug: sync-google-drive-to-wasabi-archive-rcloneview
title: "Synchroniser Google Drive vers Wasabi — Archivage et sauvegarde abordables avec RcloneView"
authors:
  - tayson
description: "Archivez votre Google Drive vers le stockage cloud chaud Wasabi pour des sauvegardes fiables à une fraction du coût d'AWS S3 avec RcloneView."
keywords:
  - Sauvegarde Google Drive
  - Stockage cloud Wasabi
  - Archivage cloud abordable
  - Sauvegarde vers Wasabi
  - RcloneView
  - Synchronisation cloud à cloud
  - Archivage de données
  - Sauvegarde économique
  - Archive Google Drive
  - Stockage chaud
tags:
  - google-drive
  - wasabi
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Drive vers Wasabi — Archivage et sauvegarde abordables avec RcloneView

> Google Drive est pratique pour la collaboration active, mais les coûts de stockage à long terme s'accumulent. Wasabi propose un stockage chaud compatible S3 à moitié prix — parfait pour archiver votre Google Drive avec RcloneView.

Google Drive est idéal pour la collaboration en équipe, mais un stockage illimité s'accompagne d'une complexité de rétention. Wasabi offre un stockage cloud chaud avec une tarification prévisible et sans frais de sortie (egress). RcloneView automatise l'archivage des projets terminés, des fichiers anciens et des données froides vers Wasabi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Google Drive et Wasabi

La configuration des deux remotes dans RcloneView est rapide et sécurisée.

**Google Drive :**
1. Cliquez sur **Add Remote** → Sélectionnez **Google Drive**
2. Autorisez RcloneView via OAuth
3. Accordez les permissions d'accès aux dossiers/fichiers
4. Vérifiez la connexion

**Wasabi :**
1. Cliquez sur **Add Remote** → Sélectionnez **Wasabi**
2. Entrez votre Access Key et Secret Key Wasabi
3. Sélectionnez votre bucket et votre région
4. Testez la connectivité

![New Remote Setup](/images/en/blog/new-remote.png)

## Archiver Google Drive vers le stockage chaud Wasabi

Créez une tâche de synchronisation ponctuelle ou récurrente pour déplacer vos fichiers. Le stockage chaud de Wasabi est immédiatement accessible — aucun délai de restauration comme avec glacier.

**Scénarios d'archivage :**
- **Fin de projet** : archivez les livrables client une fois le projet terminé
- **Optimisation du stockage** : déplacez les fichiers de plus de 90 jours vers Wasabi
- **Sauvegarde de conformité** : conservez des copies consultables des documents professionnels

![Wasabi Transfer Setup](/images/en/tutorials/wasabi-drag-and-drop.png)

## Suivre les performances de transfert en temps réel

RcloneView affiche des mesures en direct pour votre tâche d'archivage — vitesse de transfert, fichiers traités et durée restante.

![Real-Time Transfer Monitoring](/images/en/tutorials/wasabi-real-time-monitoring-transferring.png)

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un compte Wasabi sur [wasabi.com](https://wasabi.com/).
3. Ajoutez Google Drive comme remote via l'authentification OAuth.
4. Configurez votre bucket Wasabi comme remote.
5. Créez une tâche de synchronisation ou de copie et lancez l'archivage.
6. Planifiez des sauvegardes régulières pour maintenir vos archives à jour.

Archivez à moindre coût, récupérez instantanément — Wasabi et RcloneView rendent cela simple.

---

**Guides connexes :**

- [Synchroniser Google Drive vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [Archiver Google Drive vers S3 Glacier avec RcloneView](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)
- [Frais de sortie de stockage cloud — Comment les éviter avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-egress-fees-avoid-rcloneview)

<CloudSupportGrid />
