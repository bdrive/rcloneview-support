---
slug: sync-hidrive-to-amazon-s3-rcloneview
title: "Synchroniser HiDrive vers Amazon S3 — Sauvegarde cloud avec RcloneView"
authors:
  - morgan
description: "Découvrez comment synchroniser et sauvegarder vos fichiers HiDrive vers Amazon S3 avec RcloneView. Transférez des fichiers entre le stockage cloud européen et mondial grâce à une interface graphique simple."
keywords:
  - HiDrive vers Amazon S3
  - Sauvegarde HiDrive RcloneView
  - synchronisation HiDrive S3
  - sauvegarde cloud HiDrive
  - transfert de HiDrive vers AWS
  - sauvegarde cloud à cloud RcloneView
  - migration HiDrive vers S3
  - outil de sauvegarde Amazon S3
  - transfert de fichiers inter-cloud
  - synchronisation de fichiers HiDrive
tags:
  - hidrive
  - amazon-s3
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser HiDrive vers Amazon S3 — Sauvegarde cloud avec RcloneView

> Sauvegardez votre stockage HiDrive vers Amazon S3 grâce aux outils de synchronisation visuels de RcloneView — sans ligne de commande, avec planification, filtrage et suivi des transferts en temps réel intégrés.

HiDrive, la plateforme cloud européenne de Strato, est prisée des entreprises qui privilégient un stockage conforme au RGPD. Amazon S3, de son côté, est la référence en matière de durabilité du stockage objet et d'intégration à un écosystème — une destination de sauvegarde secondaire naturelle pour tout ce qui est critique. Avec RcloneView, vous pouvez connecter les deux fournisseurs dans une seule interface et exécuter des tâches de synchronisation automatisées et filtrées qui maintiennent vos buckets S3 alignés avec vos dossiers HiDrive, sans écrire la moindre commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter HiDrive et Amazon S3 dans RcloneView

HiDrive utilise OAuth pour l'authentification, ce qui signifie que RcloneView ouvre un onglet de navigateur où vous vous connectez à votre compte Strato et accordez l'accès — aucune gestion de clé API n'est requise. Allez dans **Remote > New Remote**, choisissez **HiDrive**, et terminez la connexion via le navigateur. L'arborescence de vos dossiers HiDrive apparaît immédiatement dans l'explorateur de fichiers.

Pour Amazon S3, retournez dans **Remote > New Remote**, sélectionnez **Amazon S3**, puis saisissez votre AWS Access Key ID, votre Secret Access Key ainsi que la région cible. Si vous souhaitez un accès à privilèges minimaux, créez un utilisateur IAM dédié dans la console AWS avec des droits d'écriture limités uniquement au bucket de destination, puis renseignez ces identifiants dans RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting HiDrive and Amazon S3 as remotes in RcloneView" class="img-large img-center" />

Une fois les deux remotes enregistrés, ouvrez deux panneaux côte à côte dans l'explorateur à double volet de RcloneView — HiDrive à gauche, S3 à droite — pour comparer visuellement le contenu des dossiers avant de lancer une synchronisation complète.

## Créer la tâche de synchronisation HiDrive vers S3

Une fois les deux remotes connectés, allez dans **Home > Sync** pour ouvrir l'assistant de création de tâche. Définissez votre dossier HiDrive comme source et votre bucket S3 (avec un préfixe de sous-dossier optionnel) comme destination. Dans l'étape Advanced Settings, configurez le nombre de threads de transfert simultanés en fonction de votre bande passante disponible — des valeurs plus élevées accélèrent les transferts en masse pour des structures de fichiers plates, tandis que des valeurs plus basses sont plus sûres sur des connexions soumises à des limites de débit strictes.

Dans l'étape Filtering, vous pouvez exclure les fichiers non pertinents par type (par exemple `.tmp`, `.part`) ou par ancienneté — par exemple, ne synchroniser que les fichiers modifiés au cours des 90 derniers jours à l'aide du filtre **Max file age** (`90d`). Cela permet de cibler la tâche et de réduire les appels API inutiles sur les deux plateformes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

Avant la première exécution, cliquez toujours sur **Dry Run** pour prévisualiser la liste exacte des fichiers qui seraient transférés ou supprimés — une étape essentielle lorsque vous synchronisez un compte HiDrive déjà rempli vers un nouveau bucket S3, où le sens de la synchronisation unidirectionnelle doit être correct avant tout déplacement de données.

## Planifier des sauvegardes automatisées

Pour une protection continue, les utilisateurs de la licence PLUS peuvent planifier la tâche HiDrive vers S3 pour qu'elle s'exécute automatiquement selon un planning de type crontab. Les configurations courantes incluent des synchronisations complètes nocturnes à 2h du matin et des exécutions incrémentales horaires pendant les heures de bureau. Le simulateur de planning de l'étape 4 de l'assistant de création de tâche prévisualise les 10 prochaines exécutions avant que vous ne validiez l'enregistrement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated HiDrive to S3 backup in RcloneView" class="img-large img-center" />

Une fois en fonctionnement autonome, l'onglet **Transferring** affiche la vitesse de transfert en direct et le nombre de fichiers pour chaque exécution planifiée, tandis que **Job History** enregistre chaque exécution avec son résultat, le volume de données transférées et les détails d'éventuelles erreurs — une piste d'audit complète pour la traçabilité des sauvegardes.

## Valider l'exhaustivité de la synchronisation avec Folder Compare

Une fois la première synchronisation terminée, utilisez la fonction **Folder Compare** de RcloneView pour vérifier que HiDrive et S3 sont réellement synchronisés. Ouvrez les deux dossiers dans la vue de comparaison ; RcloneView met en évidence les fichiers présents uniquement à gauche, uniquement à droite, ou dont la taille diffère — ce qui vous permet de repérer les éléments manquants ou incohérents sans avoir à croiser manuellement les listes de fichiers. Pour les archives à forts enjeux, activez la comparaison par **checksum** dans les Advanced Settings de la tâche de synchronisation afin de vérifier l'intégrité des fichiers par hachage plutôt que par la seule taille.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Amazon S3 folder contents in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre compte HiDrive via **Remote > New Remote > HiDrive** grâce à la connexion OAuth par navigateur.
3. Ajoutez votre bucket Amazon S3 via **Remote > New Remote > Amazon S3** avec vos identifiants IAM.
4. Créez une tâche de synchronisation de HiDrive vers S3 dans **Home > Sync**, lancez d'abord un Dry Run, puis exécutez-la.

Avec la planification automatisée activée, vos fichiers HiDrive sont transférés vers S3 selon votre calendrier — vous offrant une sauvegarde inter-fournisseurs sans effort manuel continu.

---

**Guides connexes :**

- [Gérer le stockage cloud HiDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Gérer Amazon S3 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Synchroniser HiDrive vers Google Drive — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-google-drive-rcloneview)

<CloudSupportGrid />
