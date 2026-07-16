---
slug: sync-koofr-to-amazon-s3-rcloneview
title: "Synchroniser Koofr avec Amazon S3 — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Synchronisez Koofr avec Amazon S3 grâce à RcloneView — transférez des fichiers entre un stockage cloud européen et AWS S3 à l'aide d'une interface graphique fiable basée sur rclone."
keywords:
  - Koofr to Amazon S3 sync
  - Koofr backup to S3
  - cloud sync tool
  - RcloneView Koofr
  - S3 archiving
  - cloud-to-cloud sync
  - AWS backup
  - European cloud to S3
  - Koofr rclone sync
  - GDPR cloud to S3
tags:
  - RcloneView
  - koofr
  - amazon-s3
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Koofr avec Amazon S3 — Sauvegarde cloud avec RcloneView

> Le stockage hébergé en Europe de Koofr et la durabilité mondiale d'Amazon S3 jouent des rôles complémentaires — RcloneView synchronise directement entre les deux, créant une stratégie de sauvegarde multi-fournisseurs sans surcharge de disque local.

Les centres de données européens de Koofr et son infrastructure conforme au RGPD en font une excellente plateforme de stockage actif, tandis qu'Amazon S3 offre une durabilité de classe mondiale et une intégration CDN pour l'archivage et la distribution. La synchronisation entre les deux crée une stratégie robuste à deux niveaux : conserver les données de travail dans les centres de données européens de Koofr tout en archivant vers S3 pour une optimisation des coûts à long terme. RcloneView gère la synchronisation directement entre les deux distants sans toucher à votre disque local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuration des deux distants

Dans RcloneView, ajoutez Koofr via **Onglet Distant > Nouveau distant > Koofr** et saisissez vos identifiants. Ajoutez ensuite **Amazon S3** : sélectionnez-le dans la liste des fournisseurs et saisissez votre Access Key ID, votre Secret Access Key et votre région AWS. Une fois les deux distants actifs, ouvrez l'explorateur à double panneau — Koofr d'un côté, votre bucket S3 de l'autre — pour une vue côte à côte de votre stockage.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Amazon S3 remotes in RcloneView" class="img-large img-center" />

Cette comparaison directe est utile pour la planification : passez en revue le contenu de Koofr, confirmez la structure du bucket S3 souhaitée et vérifiez les noms de dossiers avant de lancer le job de synchronisation.

## Configuration du job de synchronisation

Dans le **Gestionnaire de jobs**, créez un job de synchronisation depuis votre dossier Koofr vers le chemin du bucket S3 cible. Pour une équipe de conformité sauvegardant des documents sensibles de Koofr vers S3 Standard-IA pour une conservation économique, le job de synchronisation s'exécute chaque semaine grâce à la planification (licence PLUS).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Amazon S3 sync job in RcloneView" class="img-large img-center" />

Les options de filtrage de RcloneView vous permettent de restreindre la synchronisation à des types de fichiers spécifiques — par exemple, ne synchroniser que les fichiers `.pdf` et `.docx` tout en excluant les fichiers temporaires et les miniatures. Le filtrage **Max File Age** limite en outre les synchronisations aux fichiers récemment modifiés, ce qui rend les exécutions incrémentales rapides et ciblées.

## Suivi et vérification

Après la synchronisation initiale, les exécutions suivantes ne transfèrent que les modifications — RcloneView compare la taille des fichiers et les dates de modification pour identifier les différences. L'onglet **Historique des jobs** affiche le résultat de chaque synchronisation avec les octets transférés, le nombre de fichiers, la durée et le statut.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to S3 sync runs in RcloneView" class="img-large img-center" />

Pour les organisations qui conservent Koofr comme stockage principal conforme au RGPD et S3 comme niveau d'archivage, ce modèle de synchronisation crée un cycle de vie des données clair : actif dans Koofr, archivé vers S3 selon un calendrier. La fonction **Comparaison de dossiers** offre une vérification à un instant donné pour s'assurer que les deux plateformes sont synchronisées lorsque cela est nécessaire.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez le distant **Koofr** (identifiants) et le distant **Amazon S3** (Access Key).
3. Créez un job de synchronisation dans le **Gestionnaire de jobs** de Koofr vers S3.
4. Activez la planification (PLUS) pour automatiser les sauvegardes régulières.

RcloneView transforme une architecture à deux clouds en un flux de travail géré et automatisé — Koofr pour la conformité, S3 pour l'archivage, avec des synchronisations qui maintiennent les deux à jour.

---

**Guides connexes :**

- [Gérer le stockage Koofr — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr comme hub multi-cloud — Google Drive, OneDrive, Dropbox avec RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Sauvegarder Dropbox vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
