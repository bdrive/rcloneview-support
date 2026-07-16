---
slug: manage-box-cloud-sync-backup-rcloneview
title: "Gérer le stockage Box — Synchroniser et sauvegarder vos fichiers avec RcloneView"
authors:
  - tayson
description: "Gérez le stockage cloud Box avec RcloneView. Synchronisez les fichiers d'entreprise, planifiez des sauvegardes et transférez des données entre Box et d'autres fournisseurs grâce à une interface visuelle."
keywords:
  - box cloud sync
  - box backup rcloneview
  - box file transfer
  - box cloud storage manager
  - box rclone gui
  - box enterprise backup
  - box to s3 migration
  - box cloud management
  - box automated sync
  - box multi-cloud backup
tags:
  - box
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Box — Synchroniser et sauvegarder vos fichiers avec RcloneView

> Box est conçu pour la gestion de contenu d'entreprise, et RcloneView étend sa portée en connectant Box à l'ensemble de votre infrastructure multi-cloud.

Box s'est imposé comme la plateforme de contenu d'entreprise de référence, avec des fonctionnalités telles que des contrôles d'accès granulaires, des workflows pilotés par métadonnées et des certifications de conformité (HIPAA, FedRAMP, GxP). Les plans individuels débutent avec 10 Go gratuits, tandis que les plans Business offrent un stockage illimité à partir de 17,30 $ par utilisateur/mois. RcloneView se connecte à Box via son API basée sur OAuth, vous offrant une interface visuelle pour parcourir les fichiers, exécuter des synchronisations vers d'autres clouds, monter Box comme lecteur local et planifier des sauvegardes automatisées — le tout sans dépendre du client de synchronisation natif de Box ni de sa console d'administration pour les tâches de portabilité des données.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box dans RcloneView

L'ajout de Box à RcloneView suit le flux d'autorisation OAuth 2.0. Ouvrez le Gestionnaire de distants, sélectionnez **Box**, puis cliquez sur autoriser. Votre navigateur s'ouvre sur la page de connexion Box où vous accordez l'accès à RcloneView. Le jeton est stocké localement dans votre fichier de configuration rclone.

Box impose des limites de débit d'API qui varient selon le niveau de plan. Les comptes gratuits et Personal Pro ont des limites plus strictes (environ 10 appels API par seconde), tandis que les comptes Enterprise permettent un débit nettement plus élevé. RcloneView gère les réponses de limitation de débit (HTTP 429) avec des tentatives automatiques et un backoff, afin que les transferts volumineux se poursuivent sans intervention manuelle.

Une mise en garde importante : Box impose une taille de fichier individuelle maximale de 5 Go sur les plans Business et de 15 Go sur les plans Enterprise. Les fichiers dépassant ces limites échoueront à l'envoi. RcloneView consigne clairement ces erreurs dans la sortie du job afin que vous puissiez identifier les fichiers trop volumineux et les traiter séparément.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Box remote in RcloneView Remote Manager" class="img-large img-center" />

## Synchroniser Box avec d'autres fournisseurs

L'explorateur à deux volets de RcloneView rend le transfert de données entre Box et d'autres clouds intuitif. Placez Box d'un côté et AWS S3, Google Drive, Dropbox ou un dossier local de l'autre. Glissez les fichiers, ou créez un job pour les opérations répétables.

Box utilise des sommes de contrôle SHA-1 pour l'intégrité des fichiers, et RcloneView s'appuie sur celles-ci pendant les opérations de synchronisation pour détecter les changements avec précision. Seuls les fichiers dont les hachages ou les dates de modification diffèrent sont transférés, ce qui minimise l'utilisation de l'API et de la bande passante. Ceci est particulièrement précieux pour les comptes d'entreprise où les budgets d'appels API Box comptent pour les intégrations partagées.

Pour les organisations qui migrent hors de Box ou qui maintiennent une stratégie multi-cloud, RcloneView prend en charge la synchronisation complète de répertoires avec des règles de filtrage. Vous pouvez inclure ou exclure des fichiers par extension, taille ou motif de chemin — par exemple, synchroniser uniquement les fichiers `.docx` et `.pdf` d'un dossier de collaboration Box vers SharePoint, tout en ignorant les fichiers temporaires et les métadonnées système.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing files between Box and another cloud provider in RcloneView" class="img-large img-center" />

## Planifier des sauvegardes automatisées depuis Box

Les données d'entreprise sur Box relèvent souvent de politiques de rétention et de conformité qui exigent des sauvegardes indépendantes. Le planificateur de jobs de RcloneView vous permet de définir des jobs de sauvegarde récurrents — quotidiens, hebdomadaires ou selon des plannings cron personnalisés — pour répliquer le contenu Box vers un fournisseur secondaire.

Un modèle éprouvé pour les secteurs réglementés : planifiez une synchronisation quotidienne de Box vers Backblaze B2 avec Object Lock activé. Cela produit une copie immuable et versionnée de vos données Box qui répond aux exigences d'audit en matière de durabilité des données et de garde indépendante. L'historique des jobs de RcloneView offre aux responsables de conformité un journal clair de chaque exécution de sauvegarde, incluant horodatages, nombre de fichiers et détails des erreurs.

Pour les équipes IT gérant plusieurs instances Box entre différents départements, vous pouvez configurer des distants séparés pour chaque compte Box et exécuter des jobs de sauvegarde en parallèle depuis une seule installation de RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated backup from Box storage in RcloneView" class="img-large img-center" />

## Monter Box comme lecteur réseau

La fonction de montage de RcloneView associe le stockage Box à une lettre de lecteur locale (Windows) ou à un point de montage (macOS/Linux). Cela permet aux applications héritées, scripts et outils de bureau d'accéder aux fichiers Box comme s'ils étaient locaux. La couche de cache VFS met en tampon les lectures et écritures, de sorte que les performances restent acceptables pour l'édition de documents et les workflows d'aperçu multimédia.

Pour les équipes qui ont besoin d'accéder au contenu Box dans l'Explorateur Windows sans installer Box Drive, il s'agit d'une alternative légère qui ne nécessite ni privilèges administrateur ni agents de synchronisation en arrière-plan.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Box storage as a network drive in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autorisez votre compte Box via OAuth dans le Gestionnaire de distants.
3. Parcourez vos dossiers Box dans l'explorateur à deux volets et synchronisez ou copiez des fichiers vers un autre cloud.
4. Créez un job de sauvegarde planifié pour maintenir une copie indépendante des données Box critiques.

Box gère la gouvernance et la collaboration au niveau de l'entreprise, et RcloneView garantit que les données restent portables, sauvegardées et intégrées au reste de votre infrastructure cloud.

---

**Guides associés :**

- [Monter le stockage Box comme lecteur réseau avec RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)
- [Sauvegarder Dropbox vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)
- [Gérer le stockage Icedrive — Synchroniser et sauvegarder vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-icedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
