---
slug: migrate-koofr-to-google-drive-rcloneview
title: "Migrer de Koofr vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Déplacez vos fichiers de Koofr vers Google Drive avec RcloneView. Transférez des données cloud directement entre fournisseurs, en préservant la structure des dossiers sans téléchargements locaux."
keywords:
  - migrer Koofr vers Google Drive
  - transfert de Koofr vers Google Drive
  - migration RcloneView Koofr Google Drive
  - outil de migration cloud à cloud
  - interface de migration Koofr
  - déplacer des fichiers Koofr Google Drive
  - migration cloud Koofr
  - import Google Drive depuis Koofr
  - migration cloud RcloneView
  - outil de transfert de fichiers Koofr
tags:
  - RcloneView
  - koofr
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Koofr vers Google Drive — Transférer des fichiers avec RcloneView

> RcloneView déplace vos fichiers Koofr directement vers Google Drive — en préservant la structure des dossiers, en vérifiant l'intégrité, et sans nécessiter de stockage local intermédiaire.

Le stockage européen de Koofr, axé sur la confidentialité, est populaire auprès des utilisateurs qui privilégient la conformité au RGPD et la résidence des données. Lorsque les équipes migrent vers Google Workspace et doivent transférer leur contenu Koofr vers Google Drive, RcloneView gère la migration proprement : en se connectant simultanément aux deux fournisseurs et en transférant les données via un chemin direct de cloud à cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Koofr et Google Drive dans RcloneView

Ajoutez les deux fournisseurs comme distants avant de commencer la migration. Pour Koofr, allez dans l'onglet Remote > New Remote, sélectionnez Koofr, et complétez la connexion avec vos identifiants Koofr. Pour Google Drive, sélectionnez Google Drive et complétez l'authentification OAuth dans le navigateur — le flux OAuth de Google Drive est entièrement automatisé et ne nécessite aucune clé API.

Une fois les deux distants configurés, l'explorateur à deux panneaux vous permet de voir Koofr d'un côté et Google Drive de l'autre. Cette comparaison visuelle vous aide à planifier la migration : confirmer les structures de dossiers, identifier les répertoires imbriqués, et décider s'il faut migrer l'intégralité de la racine Koofr ou des sous-dossiers spécifiques.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configurer la tâche de synchronisation de migration

Créez une tâche de synchronisation nommée dans RcloneView pour une migration contrôlée et reproductible :

1. **Source :** Sélectionnez votre distant Koofr (racine ou dossier spécifique)
2. **Destination :** Sélectionnez votre distant Google Drive et le dossier cible
3. **Nom de la tâche :** Utilisez un nom descriptif comme `koofr-to-gdrive-migration`
4. **Mode :** Choisissez Copy pour déplacer les fichiers sans les supprimer de Koofr

Pour les équipes migrant de grands répertoires partagés, le filtre **Max folder depth** peut vous aider à migrer les dossiers de premier niveau indépendamment, en validant chaque palier avant de continuer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from Koofr to Google Drive in RcloneView" class="img-large img-center" />

## Prévisualiser avec Dry Run avant le transfert

Utilisez le mode dry run de RcloneView pour prévisualiser la portée de la migration sans déplacer aucun fichier. La sortie du dry run répertorie chaque fichier qui serait copié, organisé par dossier — vous donnant une image précise de ce que fera la tâche. Cela est particulièrement utile lors de la migration de structures de dossiers Koofr imbriquées où vous souhaitez vérifier la disposition de destination avant de valider.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## Surveiller la progression du transfert et consulter l'historique

L'onglet Transfer de RcloneView affiche la progression en direct de la migration Koofr vers Google Drive — fichiers en cours de transfert, vitesse actuelle et total d'octets déplacés. Une fois terminé, Job History enregistre le résumé complet : taille totale du transfert, durée, nombre de fichiers et toute erreur rencontrée. Si les limites de débit de l'API Google Drive ont ralenti le transfert, le journal d'historique capture ces événements de nouvelle tentative.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Koofr et Google Drive comme distants dans l'onglet Remote > New Remote.
3. Créez une tâche Copy ou Sync de Koofr vers votre destination Google Drive.
4. Exécutez un dry run pour prévisualiser, puis lancez la migration.

Passer de Koofr à Google Drive est une opération simple de cloud à cloud dans RcloneView — aucun espace disque local requis, et une transparence totale sur chaque fichier transféré.

---

**Guides connexes :**

- [Gérer le stockage Koofr — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Gérer le stockage Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Koofr vs Jottacloud — Comparaison des stockages cloud européens avec RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
