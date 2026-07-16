---
slug: sync-google-drive-to-internet-archive-rcloneview
title: "Synchroniser Google Drive vers Internet Archive — Préservation numérique avec RcloneView"
authors:
  - tayson
description: "Découvrez comment archiver des fichiers Google Drive vers Internet Archive pour une préservation numérique à long terme avec RcloneView. Idéal pour les chercheurs, journalistes et enseignants."
keywords:
  - Google Drive Internet Archive sync
  - digital preservation RcloneView
  - archive Google Drive files
  - Internet Archive rclone GUI
  - long-term cloud backup
  - researcher data archiving
  - Google Drive backup Internet Archive
  - RcloneView digital archive
tags:
  - google-drive
  - internet-archive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Drive vers Internet Archive — Préservation numérique avec RcloneView

> Internet Archive offre un stockage permanent et gratuit pour le contenu numérique — RcloneView facilite le transfert de vos fichiers Google Drive vers cette plateforme pour une préservation à long terme.

Les chercheurs qui archivent des données de terrain, les journalistes qui préservent des documents sources et les enseignants qui conservent du matériel de cours font tous face au même défi : Google Drive est pratique pour le travail actif, mais il n'est pas conçu pour la préservation permanente. Internet Archive (archive.org), si. Il conserve le contenu indéfiniment et le rend accessible publiquement (ou en privé) sur le long terme. RcloneView connecte les deux fournisseurs et vous permet de synchroniser le contenu de Google Drive vers Internet Archive sans toucher à la ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connexion à Google Drive

Ouvrez RcloneView et allez dans **Remote Manager**. Cliquez sur **New Remote** et sélectionnez **Google Drive**. RcloneView ouvre votre navigateur pour l'authentification OAuth — connectez-vous avec votre compte Google et accordez l'accès. Après autorisation, le remote apparaît dans Remote Manager. Ouvrez-le pour confirmer que vos fichiers Drive sont visibles.

Si vous devez archiver un **Shared Drive**, configurez le remote pour qu'il pointe vers la racine du Shared Drive spécifique plutôt que vers My Drive. Vérifiez les paramètres avancés du remote dans RcloneView pour l'option team drive.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Drive and Internet Archive remotes in RcloneView" class="img-large img-center" />

## Connexion à Internet Archive

Retournez dans **Remote Manager**, cliquez sur **New Remote** et sélectionnez **Internet Archive**. Internet Archive utilise des identifiants email/mot de passe (votre compte de connexion archive.org) ou des clés API compatibles S3 disponibles dans les paramètres de votre compte sur archive.org. Saisissez l'Access Key et la Secret Key (clés API S3 pour Internet Archive) dans le formulaire de configuration puis enregistrez.

Ouvrez le remote Internet Archive pour vérifier la connexion. Vos éléments existants sur archive.org apparaîtront comme des entrées de premier niveau.

## Configuration de la tâche d'archivage

Allez dans **Jobs** et cliquez sur **New Job**. Définissez Google Drive comme source — sélectionnez le dossier spécifique contenant les données que vous souhaitez préserver. Définissez le remote Internet Archive comme destination, en précisant l'identifiant de l'item où les fichiers doivent atterrir.

À l'étape 2 de l'assistant de tâche, configurez les options appropriées pour l'archivage :

- Activez la **vérification par somme de contrôle** — l'intégrité des données est essentielle pour la préservation
- Définissez un nombre modéré de transferts simultanés (2 à 4) pour éviter de surcharger le pipeline d'ingestion d'Internet Archive
- Activez d'abord **Dry Run** pour vérifier exactement ce qui sera téléversé

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to Internet Archive" class="img-large img-center" />

## Exécution de la synchronisation de préservation

Après avoir examiné le résultat du Dry Run dans l'onglet Log, désactivez Dry Run et exécutez la tâche complète. RcloneView transfère les fichiers de Google Drive directement vers Internet Archive. Selon la taille des fichiers et la file d'ingestion d'Archive, les téléversements volumineux peuvent prendre du temps — le panneau de progression en temps réel vous tient informé.

Pour des workflows de préservation continus, créez une tâche récurrente (licence PLUS requise pour la planification) afin que les nouveaux fichiers ajoutés à un dossier Google Drive soient automatiquement archivés selon un calendrier — hebdomadaire, par exemple.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Google Drive to Internet Archive transfers" class="img-large img-center" />

## Cas d'usage

- **Chercheurs universitaires** : archiver des jeux de données et des documents de travail à la fin d'un projet
- **Journalistes** : préserver durablement du matériel source et des enregistrements d'entretiens
- **Enseignants** : archiver du contenu de cours et des ressources pédagogiques numériques
- **Organisations à but non lucratif** : préserver des demandes de subvention, des dossiers de donateurs et l'histoire institutionnelle

La permanence d'Internet Archive le distingue de tout service cloud commercial — le contenu qui y est déposé est conçu pour survivre aux organisations individuelles ou aux abonnements.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez Google Drive via OAuth dans **Remote Manager**.
3. Connectez Internet Archive avec vos identifiants API S3 provenant des paramètres de votre compte archive.org.
4. Créez une tâche de synchronisation de Google Drive vers Internet Archive ; exécutez d'abord Dry Run, puis l'archivage complet.

RcloneView offre aux archivistes et aux chercheurs un workflow fiable et auditable pour déposer le contenu de Google Drive dans les archives permanentes.

---

**Guides connexes :**

- [Migration cloud à cloud avec RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Migrations cloud vérifiées par somme de contrôle avec RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
